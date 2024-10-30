import { lowerCaseValues } from "../utils.js";
import { IDict } from "../../interfaces.js";


export const COINS_FRAXTAL_TESTNET: IDict<string> = lowerCaseValues({
    crv: '0x2CAb811d351B4eF492D8C197E09939F1C9f54330',

    // --- FRAXTAL ---
    frxeth: "0x7f195FDdf37D48aCD075db34B62E7e13118A1BC1",
});

export const cTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const yTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const ycTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const aTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
