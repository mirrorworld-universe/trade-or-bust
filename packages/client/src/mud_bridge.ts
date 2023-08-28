import { hexToArray } from "@latticexyz/utils";

window.mudutils = {};
window.mudutils.hexToArray = function(width, height, mapArray){
    const terrain = Array.from(hexToArray(mapArray)).map((value:number, index) => {
        return value;
    });

    const terrainArray = [];
    for (let i = 0; i < terrain.length; i += Number(width)) {
        const row = terrain.slice(i, i + Number(width));
        terrainArray.push(row);
    }

    return terrainArray;
}