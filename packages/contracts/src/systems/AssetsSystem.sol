// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { RaiseColddownData,RaiseColddown, AssetsListData,AssetsList, Log,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract AssetsSystem is System {
    function pickFund() public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick fund.");
        
        Player.setMoney(player,Player.getMoney(player) + 100);
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