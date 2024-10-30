import { lowerCaseKeys, lowerCaseValues } from "../utils.js";
import { IDict } from "../../interfaces.js";


export const COINS_FRAXTAL_TESTNET: IDict<string> = lowerCaseValues({
    crv: '0x2CAb811d351B4eF492D8C197E09939F1C9f54330',

    // --- FRAXTAL ---
    frxeth: "0x7f195FDdf37D48aCD075db34B62E7e13118A1BC1",
    frax: "0x2CAb811d351B4eF492D8C197E09939F1C9f54330",
    dusd: "0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c",
    wfrxeth: "0xfc00000000000000000000000000000000000006",
    sfrxeth: "0x05A09C8BF515D0035e1Af22b24487928913475Bd",
    fxs: "0x98182ec55Be5091d653F9Df016fb1070add7a16E",
    sfrax: "0x0Dbf64462FEC588df32FC5C9941421F7d93e0Fb3",
    dai: "0x828a7248daD914435F452D73363491Ab7ec4D8f4",
    sdai: "0x4CB47b0FD8f8EfF846889D3BEaD1c33bc93C7FD6",
    usde: "0x78C4fa90703C8D905b83416Cda5b2F77A8C386C5",
    susde: "0x99Df29568C899D0854017de5D265aAF42Cb123fA"
});

export const DECIMALS_FRAXTAL_TESTNET: IDict<number> = lowerCaseKeys({
    "0x4d6e79013212f10a026a1fb0b926c9fd0432b96c": 6,
    "0x7f195fddf37d48acd075db34b62e7e13118a1bc1": 18,
    "0x2cab811d351b4ef492d8c197e09939f1c9f54330": 18,
    "0xfc00000000000000000000000000000000000006": 18,
    "0x05a09c8bf515d0035e1af22b24487928913475bd": 18,
    "0x98182ec55be5091d653f9df016fb1070add7a16e": 18,
    "0x0dbf64462fec588df32fc5c9941421f7d93e0fb3": 18,
    "0x828a7248dad914435f452d73363491ab7ec4d8f4": 18,
    "0x4cb47b0fd8f8eff846889d3bead1c33bc93c7fd6": 18,
    "0x78c4fa90703c8d905b83416cda5b2f77a8c386c5": 18,
    "0x99df29568c899d0854017de5d265aaf42cb123fa": 18
});

export const cTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const yTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const ycTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const aTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
