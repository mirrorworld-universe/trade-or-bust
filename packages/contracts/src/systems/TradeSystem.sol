// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { TradeListData, TradeList, PassiveTransactionData, IsTrading, PassiveTransaction, UnsolicitedTransaction,IsTrading, AssetsListData,AssetsList,Player,Game ,GameData,GameState,PlayerData,PlayerTableId,IsPlayer} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract TradeSystem is System {
    function trade(bytes32 targetPlayer, uint8 assetKind, uint32 money) public{
        bytes32 player = addressToEntityKey(_msgSender());
        require(targetPlayer != player,"You can't trade yourself!");
        require(IsPlayer.get(player), "Not a player when pick asset.");

        require(!IsTrading.get(player),"This player is trading");

        PlayerData memory pd = Player.get(player);
        require(pd.money >= money, "You don't have enough money to do this trade");

        // PlayerData memory tarPd = Player.get(targetPlayer);

        AssetsListData memory ald = AssetsList.get(player);
        AssetsListData memory tarAld = AssetsList.get(player);
        if(assetKind == 1){//GPU
            require(ald.gpu > 0,"You don't have this asset 1");
            require(tarAld.gpu > 0,"Your trade partner don't have this asset 1");
            AssetsList.setGpu(player,ald.gpu - 1);
        }else if(assetKind == 2){//Bitcoin
            require(ald.bitcoin > 0,"You don't have this asset 2");
            require(tarAld.bitcoin > 0,"Your trade partner don't have this asset 2");
            AssetsList.setBitcoin(player,ald.bitcoin - 1);
        }else if(assetKind == 3){//锂电池
            require(ald.battery > 0,"You don't have this asset 3");
            require(tarAld.battery > 0,"Your trade partner don't have this asset 3");
            AssetsList.setBattery(player,ald.battery - 1);
        }else if(assetKind == 4){//超导体
            require(ald.leiter > 0,"You don't have this asset 4");
            require(tarAld.leiter > 0,"Your trade partner don't have this asset 4");
            AssetsList.setLeiter(player,ald.leiter - 1);
        }else if(assetKind == 5){//Gold
            require(ald.gold > 0,"You don't have this asset 5");
            require(tarAld.gold > 0,"Your trade partner don't have this asset 5");
            AssetsList.setGold(player,ald.gold - 1);
        }else if(assetKind == 6){//石油
            require(ald.oil > 0,"You don't have this asset 6");
            require(tarAld.oil > 0,"Your trade partner don't have this asset 6");
            AssetsList.setOil(player,ald.oil - 1);
        }else{
            require(false,"Unknown asset kind");
        }

        Player.setMoney(player,pd.money - money);

        IsTrading.set(player,true);
        IsTrading.set(targetPlayer,true);

        PassiveTransaction.set(targetPlayer,assetKind,money,player);
        UnsolicitedTransaction.set(player,assetKind,money,targetPlayer);
    }

    function acceptTrade() public returns (bool){
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick asset.");

        require(IsTrading.get(player),"This player is not in a trading");

        PassiveTransactionData memory pTranData = PassiveTransaction.get(player);
        uint8 assetKind = pTranData.asset;
        bytes32 from = pTranData.from;
        AssetsListData memory ald = AssetsList.get(player);
        AssetsListData memory tald = AssetsList.get(from);

        if(assetKind == 1){//GPU
            require(ald.gpu > 0,"You don't have this asset 1");
            AssetsList.setGpu(player,ald.gpu - 1);
            AssetsList.setGpu(from,tald.gpu + 2);
        }else if(assetKind == 2){//Bitcoin
            require(ald.bitcoin > 0,"You don't have this asset 2");
            AssetsList.setBitcoin(player,ald.bitcoin - 1);
            AssetsList.setGpu(from,tald.bitcoin + 2);
        }else if(assetKind == 3){//锂电池
            require(ald.battery > 0,"You don't have this asset 3");
            AssetsList.setBattery(player,ald.battery - 1);
            AssetsList.setGpu(from,tald.battery + 2);
        }else if(assetKind == 4){//超导体
            require(ald.leiter > 0,"You don't have this asset 4");
            AssetsList.setLeiter(player,ald.leiter - 1);
            AssetsList.setGpu(from,tald.leiter + 2);
        }else if(assetKind == 5){//Gold
            require(ald.gold > 0,"You don't have this asset 5");
            AssetsList.setGold(player,ald.gold - 1);
            AssetsList.setGpu(from,tald.gold + 2);
        }else if(assetKind == 6){//石油
            require(ald.oil > 0,"You don't have this asset 6");
            AssetsList.setOil(player,ald.oil - 1);
            AssetsList.setGpu(from,tald.oil + 2);
        }else{
            require(false,"Unknown asset kind");
        }

        Player.setMoney(player,Player.getMoney(player) + pTranData.money);
        finishTrade(from,player,true);
        return true;
    }

    function rejectTrade() public returns(bool){
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player when pick asset.");

        require(IsTrading.get(player),"This player is not in a trading");


        PassiveTransactionData memory pTranData = PassiveTransaction.get(player);
        bytes32 from = pTranData.from;
        require(Player.getMoney(player) > pTranData.money,"You don't have enough money to reject.");

        uint8 assetKind = pTranData.asset;
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

        Player.setMoney(player,Player.getMoney(player) - pTranData.money);
        Player.setMoney(from,Player.getMoney(from) + 2*pTranData.money);

        finishTrade(from,player,false);

        return true;
    }

    function finishTrade(bytes32 presenter,bytes32 handler,bool result) private{
        //rejecter
        TradeListData memory tld = TradeList.get(handler);
        bytes memory newTradeList = addTradeItem(tld.list,presenter,false,result);
        TradeList.set(handler,newTradeList);

        //presenter
        TradeListData memory tld2 = TradeList.get(presenter);
        bytes memory newTradeList2 = addTradeItem(tld2.list,handler,true,result);
        TradeList.set(presenter,newTradeList2);

        IsTrading.set(presenter,false);
        IsTrading.set(handler,false);

        UnsolicitedTransaction.deleteRecord(presenter);
        PassiveTransaction.deleteRecord(handler);
    }


    function concatenate(string memory str, uint256 num) public pure returns (string memory) {
        // Convert the number to a string by iterating over its digits
        uint256 tempNum = num;
        uint256 digits = 0;
        while (tempNum != 0) {
            digits++;
            tempNum /= 10;
        }

        bytes memory buffer = new bytes(digits);
        for (uint256 i = digits; i > 0; i--) {
            buffer[i - 1] = bytes1(uint8(48 + (num % 10)));
            num /= 10;
        }

        // Concatenate the string and the number
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(strBytes.length + buffer.length);
        uint256 k = 0;
        for (uint256 j = 0; j < strBytes.length; j++) {
            result[k++] = strBytes[j];
        }
        for (uint256 j = 0; j < buffer.length; j++) {
            result[k++] = buffer[j];
        }

        return string(result);
    }
    
    function addTradeItem(bytes memory data,bytes32 value,bool isPresenter, bool flag) internal pure returns (bytes memory) {
        TradeListItem memory newItem = TradeListItem(isPresenter, flag, value);
        // Check if data is empty
        if (data.length == 0) {
            // If data is empty, create a new list with only the new item
            TradeListItem[] memory tradeList = new TradeListItem[](1);
            tradeList[0] = newItem;

            // Encode the new list to bytes
            bytes memory list1 = abi.encode(tradeList);

            return list1;
        }


        // Decode existing list from bytes
        TradeListItem[] memory list = abi.decode(data, (TradeListItem[]));

        // Create a new list with one additional item
        TradeListItem[] memory newList = new TradeListItem[](list.length + 1);
        for (uint256 i = 0; i < list.length; i++) {
            newList[i] = list[i];
        }

        newList[newList.length - 1] = newItem;

        // Encode the new list to bytes
        bytes memory encodedList = abi.encode(newList);

        return encodedList;
    }

    struct TradeListItem {
        bool isPresenter;
        bool isSuccess;
        bytes32 partner;
    }
}