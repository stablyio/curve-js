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
    "0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c": 6,
});

export const cTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const yTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const ycTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
export const aTokensFraxtalTestnet = []; //.map((a) => a.toLowerCase());
