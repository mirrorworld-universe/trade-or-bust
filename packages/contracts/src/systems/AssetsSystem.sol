// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { IsEliminated,HasDebt, Debt, OwnedCards,FundCards,FundPool,RaiseColddownData,RaiseColddown, AssetsListData,AssetsList, Log,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract AssetsSystem is System {
    // [1,10,10,30],
    // [2,20,10,30],
    // [3,30,10,30],
    // [4,40,10,30],
    // [5,50,10,30],
    // [6,60,10,30],

    // [7,110,12,40],
    // [8,120,12,40],
    // [9,130,12,40],
    // [10,140,12,40],
    // [11,150,12,40],
    // [12,160,12,40],

    // [13,210,14,50],
    // [14,220,14,50],
    // [15,230,14,50],
    // [16,240,14,50],
    // [17,250,14,50],
    // [18,260,14,50]

    function pay() public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick fund.");

        uint32 debt = getNowDebt(player);
        require(debt > 0,"You have no debt!");

        require(GameState.get() == 2,"Game is finished.");

        HasDebt.deleteRecord(player);
        Debt.deleteRecord(player);

        if(Player.getMoney(player) < debt){
            IsEliminated.set(player,true);
        }else{
            uint32 leftMoney = Player.getMoney(player) - debt;
            Player.setMoney(player,leftMoney);
            // uint256[] memory ownedCards = updateFourthElement(player);

            uint256[] memory ownedCards = OwnedCards.get(player);
            require(ownedCards.length % 5 == 0, "Invalid array length");

            for (uint256 i = 0; i < ownedCards.length; i += 5) {
                if (ownedCards[i] == 0) {
                    break;
                }
                ownedCards[i + 4] = block.timestamp;
            }

            OwnedCards.set(player, ownedCards);
        }
    }

    // mapping(uint16 => uint16[4]) public cardToGainMoney;
    function pickFund(uint8 cardId) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick fund.");

        require(GameState.get() == 2,"Game is finished.");

        require(!IsEliminated.get(player),"You are already eliminated.");
        uint16[72] memory allCards = FundCards.get();
        
        bool cardIdExsists = false;
        uint16[9] memory array = FundPool.getArray();
        for(uint8 i=0;i<array.length;i++){
            uint16 id = array[i];
            if(id == cardId){
                cardIdExsists = true;

                uint256[] memory ownedCards = OwnedCards.get(player);
                uint16 tmpIdx = (id - 1)*4;
                push(ownedCards,allCards[tmpIdx]);
                push(ownedCards,allCards[tmpIdx+1]);
                push(ownedCards,allCards[tmpIdx+2]);
                push(ownedCards,allCards[tmpIdx+3]);
                push(ownedCards,block.timestamp);
                OwnedCards.set(player,ownedCards);

                array[i] = getRandomNumbers(array);
                FundPool.setArray(array);
                break;
            }
        }

        require(cardIdExsists,"Card id not exsists, seems other people pick it at front of you.");

        
        uint16 gainMoney = allCards[(cardId - 1)*4 + 1];
        
        Player.setMoney(player,Player.getMoney(player) + gainMoney);
    }

    function push(uint256[] memory ownedCards,uint number) pure private{
        for(uint16 i=0;i<ownedCards.length;i++){
            if(ownedCards[i] == 0){
                ownedCards[i] = number;
                break;
            }
        }
    }

    function pickAsset(uint8 assetKind) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick asset.");

        require(GameState.get() == 2,"Game is finished.");

        require(!IsEliminated.get(player),"You are already eliminated.");

        RaiseColddownData memory rcd = RaiseColddown.get(player);
        uint256 time = rcd.end;
        require(block.timestamp >= time,"Raise colddown is not finish yet.");

        AssetsListData memory ald = AssetsList.get(player);
        if(assetKind == 1){//GPU
            AssetsList.setGpu(player,ald.gpu + 1);
        }else if(assetKind == 2){//Bitcoin
            AssetsList.setBitcoin(player,ald.bitcoin + 1);
        }else if(assetKind == 3){//锂电池
            AssetsList.setBattery(player,ald.battery + 1);
        }else if(assetKind == 4){//超导体
            AssetsList.setLeiter(player,ald.leiter + 1);
        }else if(assetKind == 5){//Gold
            AssetsList.setGold(player,ald.gold + 1);
        }else if(assetKind == 6){//石油
            AssetsList.setOil(player,ald.oil + 1);
        }else{
            require(false,"Unknown asset kind");
        }

        //set cold down
        RaiseColddown.set(player,block.timestamp,block.timestamp + 1*60);
    }


    // function setPlayerResult(bytes32 player) private{
    //     AssetsListData memory alData = AssetsList.get(player);

    //     int8 score1 = calculateScore(alData.gpu);
    //     int8 score2 = calculateScore(alData.bitcoin);
    //     int8 score3 = calculateScore(alData.battery);
    //     int8 score4 = calculateScore(alData.leiter);
    //     int8 score5 = calculateScore(alData.gold);
    //     int8 score6 = calculateScore(alData.oil);
    //     int32 totalScore = score1 + score2 + score3 + score4 + score5 + score6; 

    //     IsFinishGame.set(player,true);
    //     PlayerGameResult.set(player,0,totalScore,score1,score2,score3,score4,score5,score6);
    // }

    
    function calculateScore(int8 num) private pure returns (int8) {
        int8 score = 0;
        for (int8 i = 1; i <= num; i++) {
            score += i;
        }
        return score;
    }


    function getRandomNumbers(uint16[9] memory selectedNumbers) private view returns (uint16) {
        uint8 duplicatTimes = 0;//解决生成的数字始终一样的问题
        uint16 finalNumber = 0;

        while (finalNumber == 0) {
            uint16 randomNumber = generateRandomNumber(0);
            randomNumber = randomNumber % 18 + 1 + duplicatTimes;
            if(randomNumber > 18){
              randomNumber = randomNumber - 18;
            }
            
            bool isDuplicate = false;
            for (uint8 j = 0; j < selectedNumbers.length; j++) {
                if (selectedNumbers[j] == randomNumber) {
                    isDuplicate = true;
                    duplicatTimes++;
                    break;
                }
            }

            if(!isDuplicate){
                finalNumber = randomNumber;
            }
        }
        
        require(
            finalNumber != 0,"finalNumber is 000000!"
        );
        return finalNumber;
    }

    function getNowDebt(bytes32 player) private view returns(uint32){
        uint256[] memory ownedCards = OwnedCards.get(player);
        uint32 debt = 0;
        require(ownedCards.length % 5 == 0, "Invalid array length");

        for (uint i = 0; i < ownedCards.length; i += 5) {
            // Check if the first element of the group is 0
            if (ownedCards[i] == 0) {
                // If it's 0, break the loop as the subsequent elements are all 0
                break;
            }

            // Update the fourth element of each group to 9999
            uint256 timeInterval = ownedCards[i + 2] * 60;
            if(ownedCards[i + 4] + timeInterval < block.timestamp){
                uint256 timeDiff = (block.timestamp - ownedCards[i + 4]);
                uint256 payTimes = timeDiff / timeInterval;
                // Log.set(player,payTimes);
                uint256 input = payTimes * (ownedCards[i + 1] * ownedCards[i + 3] / 100);
                // Log.set(player,input);

                debt += uint32(input);
            }
        }

        return debt;
    }

    function updateFourthElement(bytes32 player) private view returns (uint256[] memory) {
        uint256[] memory ownedCards = OwnedCards.get(player);
        require(ownedCards.length % 5 == 0, "Invalid array length");

        for (uint i = 0; i < ownedCards.length; i += 5) {
            // Check if the first element of the group is 0
            if (ownedCards[i] == 0) {
                // If it's 0, break the loop as the subsequent elements are all 0
                break;
            }

            // Update the fourth element of each group to 9999
            ownedCards[i + 4] = block.timestamp;
        }

        return ownedCards;
    }

    // function processArray(uint[] memory ownedCards) private pure returns (uint[][] memory) {
    //     uint[][] memory result = new uint[][](ownedCards.length / 5);
    //     uint index = 0;

    //     for (uint i = 0; i < ownedCards.length; i += 5) {
    //         if (ownedCards[i] == 0) {
    //             break;
    //         }

    //         uint[5] memory subArray;
    //         for (uint j = 0; j < 5; j++) {
    //             subArray[j] = ownedCards[i + j];
    //         }

    //         result[index] = subArray;
    //         index++;
    //     }

    //     return result;
    // }
    
    function bytesToUint16(bytes32 b) private pure returns (uint16) {
        uint16 number;
        for (uint256 i = 0; i < b.length; i++) {
            number = number + uint16(uint8(b[i])) * uint16(2**(8 * (b.length - (i + 1))));
        }
        return number;
    }
    
    function generateRandomNumber(uint8 seed) private view returns (uint16) {
        bytes32 hash = keccak256(abi.encodePacked(block.timestamp, block.difficulty, seed));
        return bytesToUint16(hash);
    }
}