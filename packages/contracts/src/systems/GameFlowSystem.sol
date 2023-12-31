// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { IsEliminated,OwnedCards,HasDebt,Debt,MapItem,MapItemTableId,RaiseColddown,TransactionList,PlayerGameResult, TradeListData, TradeList, PassiveTransactionData, IsTrading, PassiveTransaction, UnsolicitedTransaction,IsTrading, AssetsListData,AssetsList,Player,Game ,GameData,GameState,PlayerData,PlayerTableId,IsPlayer} from "../codegen/Tables.sol";

import { addressToEntityKey } from "../addressToEntityKey.sol";
import { query, QueryFragment, QueryType } from "@latticexyz/world/src/modules/keysintable/query.sol";

contract GameFlowSystem is System {

        
    struct ScoreObj{
        bytes32 player;
        int32 totalScore;
        int8 gpu;
        int8 bitcoin;
        int8 battery;
        int8 leiter;
        int8 gold;
        int8 oil;
        bool bankrupt;
    }

  function restartGame() public{
        bytes32 player = addressToEntityKey(address(_msgSender()));
        // require(IsPlayer.get(player),"Already is a player!");

        GameState.set(1);

        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        // ScoreObj[] memory scoreObjList = new ScoreObj[](keyTuples.length);
        // uint32 index = 0;

        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory assetsLists = keyTuples[a];

            for (uint256 i = 0; i < assetsLists.length; i++) {
                bytes32 tmpPlayer = assetsLists[i];
                // if(!isBytes32NonZero(tmpPlayer)) continue;
                bool bankrupt = false;
                if(HasDebt.get(tmpPlayer)){
                    uint32 debt = getDebt(tmpPlayer);
                    if(Player.getMoney(tmpPlayer) < debt){
                        bankrupt = true;
                    }
                }

                if(bankrupt){
                    IsEliminated.set(tmpPlayer,true);
                }
            }
        }
        clearPlayerComponents();
        clearMapComponents();
        // resetGame();
    }
  function finishGame() public{
        bytes32 player = addressToEntityKey(address(_msgSender()));
        require(IsPlayer.get(player),"Already is a player!");

        uint32 gameState = GameState.get();
        require(gameState == 2,"Game is finished already");

        require(!IsEliminated.get(player),"You are already eliminated.");

        GameState.set(1);

        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        // ScoreObj[] memory scoreObjList = new ScoreObj[](keyTuples.length);
        // uint32 index = 0;

        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory assetsLists = keyTuples[a];

            for (uint256 i = 0; i < assetsLists.length; i++) {
                bytes32 tmpPlayer = assetsLists[i];
                // if(!isBytes32NonZero(tmpPlayer)) continue;
                bool bankrupt = false;
                if(HasDebt.get(tmpPlayer)){
                    uint32 debt = getDebt(tmpPlayer);
                    if(Player.getMoney(tmpPlayer) < debt){
                        bankrupt = true;
                    }
                }

                if(bankrupt){
                    IsEliminated.set(tmpPlayer,true);
                }
            }
        }
        clearPlayerComponents();
        clearMapComponents();
        // resetGame();
    }

    function clearPlayerComponents() private {
        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        
        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory allPlayers = keyTuples[a];

            for (uint256 i = 0; i < allPlayers.length; i++) {
                bytes32 tmpPlayer = allPlayers[i];

                //Player
                IsPlayer.deleteRecord(tmpPlayer);
                Player.deleteRecord(tmpPlayer);

                // //Trade
                // AssetsList.deleteRecord(tmpPlayer);
                UnsolicitedTransaction.deleteRecord(tmpPlayer);
                PassiveTransaction.deleteRecord(tmpPlayer);
                TradeList.deleteRecord(tmpPlayer);
                TransactionList.deleteRecord(tmpPlayer);
                RaiseColddown.deleteRecord(tmpPlayer);

                //
                HasDebt.deleteRecord(tmpPlayer);
                Debt.deleteRecord(tmpPlayer);
            }
        }
    }

    function clearMapComponents() private{

        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, MapItemTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        
        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory array1 = keyTuples[a];

            for (uint256 i = 0; i < array1.length; i++) {
                bytes32 tmpEntity = array1[i];

                MapItem.deleteRecord(tmpEntity);
            }
        }
    }

    // function resetGame() private{
    //     uint gameSec = 60;
    //     uint calSec = 60;

    //     uint startWaitSec = 60;
    //     uint256 gameId = block.timestamp;
    //     uint256 startTime = block.timestamp + startWaitSec;
    //     uint256 endTime = startTime + gameSec;
    //     uint256 finishTime = endTime + calSec;

    //     Game.set(gameId, startTime, endTime, finishTime);
    // }

    function isBytes32NonZero(bytes32 value) private pure returns (bool) {
        for (uint256 i = 0; i < 32; i++) {
            if (value[i] != 0x00) {
                return true;
            }
        }
        return false;
    }

    function convertIntToUint(uint256 number) private pure returns (int32) {
        require(number >= 0, "Negative number cannot be converted to uint256");
        return int32(uint32(number));
    }
    function calculateScore(int8 num) private pure returns (int8) {
        int8 score = 0;
        for (int8 i = 1; i <= num; i++) {
            score += i;
        }
        return score;
    }

    function sortScores(ScoreObj[] memory scores) private pure returns (ScoreObj[] memory) {
        uint256 length = scores.length;
        for (uint256 i = 0; i < length - 1; i++) {
            for (uint256 j = 0; j < length - i - 1; j++) {
                if (scores[j].totalScore < scores[j + 1].totalScore) {
                    ScoreObj memory temp = scores[j];
                    scores[j] = scores[j + 1];
                    scores[j + 1] = temp;
                }
            }
        }
        return scores;
    }

    function getDebt(bytes32 player) private view returns (uint32) {
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
    
}
