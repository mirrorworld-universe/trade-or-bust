// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { AssetsListData,AssetsList, Log,Counter,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract TradeSystem is System {
    function trade(bytes32 targetPlayer, uint8 assetKind, uint32 money) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick asset.");

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
    }
}