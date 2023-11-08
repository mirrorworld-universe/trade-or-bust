// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { RaiseColddownData,RaiseColddown, AssetsListData,AssetsList, Log,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
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
    // function initFundPool() public{

    // }

    mapping(uint16 => uint16[4]) public cardToGainMoney;
    function pickFund(uint8 cardId) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick fund.");

        if(cardToGainMoney[0].length == 0) cardToGainMoney[0] = [1,10,10,30];
        if(cardToGainMoney[1].length == 0) cardToGainMoney[1] = [2,20,10,30];
        if(cardToGainMoney[2].length == 0) cardToGainMoney[2] = [3,30,10,30];
        if(cardToGainMoney[3].length == 0) cardToGainMoney[3] = [4,40,10,30];
        if(cardToGainMoney[4].length == 0) cardToGainMoney[4] = [5,50,10,30];
        if(cardToGainMoney[5].length == 0) cardToGainMoney[5] = [6,50,10,30];

        if(cardToGainMoney[6].length == 0) cardToGainMoney[6] = [7,110,12,40];
        if(cardToGainMoney[7].length == 0) cardToGainMoney[7] = [8,120,12,40];
        if(cardToGainMoney[8].length == 0) cardToGainMoney[8] = [9,130,12,40];
        if(cardToGainMoney[9].length == 0) cardToGainMoney[9] = [10,140,12,40];
        if(cardToGainMoney[10].length == 0) cardToGainMoney[10] = [11,150,12,40];
        if(cardToGainMoney[11].length == 0) cardToGainMoney[11] = [12,160,12,40];

        if(cardToGainMoney[12].length == 0) cardToGainMoney[12] = [13,210,14,50];
        if(cardToGainMoney[13].length == 0) cardToGainMoney[13] = [14,220,15,50];
        if(cardToGainMoney[14].length == 0) cardToGainMoney[14] = [15,230,15,50];
        if(cardToGainMoney[15].length == 0) cardToGainMoney[15] = [16,240,15,50];
        if(cardToGainMoney[16].length == 0) cardToGainMoney[16] = [17,250,15,50];
        if(cardToGainMoney[17].length == 0) cardToGainMoney[17] = [18,260,15,50];

        uint16 gainMoney = cardToGainMoney[cardId - 1][1];
        
        Player.setMoney(player,Player.getMoney(player) + gainMoney);
    }

    function pickAsset(uint8 assetKind) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick asset.");

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
}