import { lowerCasePoolDataAddresses } from "../utils.js";
import { IPoolData, IDict } from "../../interfaces.js";
import twopoolSwapABI from '../abis/2pool/swap.json' ;
import gaugeChildABI from '../abis/gauge_child.json' ;

export const POOLS_DATA_FRAXTAL_TESTNET: IDict<IPoolData> = lowerCasePoolDataAddresses({
    'dTrinity_dUSD_FXS': {
        name: "dTrinity_dUSD_FXS",
        full_name: "dTrinity_dUSD_FXS",
        symbol: "ddUSDFXS",
        reference_asset: 'CRYPTO',
        swap_address: '0x1BBB5CAf76868698F00056f48f77ba13cfc5fE8D', // pool address
        token_address: '0x1BBB5CAf76868698F00056f48f77ba13cfc5fE8D', // pool address
        gauge_address: '0x0000000000000000000000000000000000000000', // this pool has no gauge
        is_plain: true,
        is_crypto: true,
        underlying_coins: ['dUSD', 'FXS'],
        wrapped_coins: ['dUSD', 'FXS'],
        underlying_coin_addresses: [
            '0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c',
            '0x98182ec55Be5091d653F9Df016fb1070add7a16E'
        ],
        wrapped_coin_addresses: [
            '0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c',
            '0x98182ec55Be5091d653F9Df016fb1070add7a16E'
        ],
        underlying_decimals: [6, 18],
        wrapped_decimals: [6, 18],
        swap_abi: twopoolSwapABI,
        gauge_abi: gaugeChildABI,
    },

    'dTrinity_FRAX_sFRAX': {
        name: "dTrinity_FRAX_sFRAX",
        full_name: "dTrinity_FRAX_sFRAX",
        symbol: "dFRAXsFRAX",
        reference_asset: 'CRYPTO',
        swap_address: '0x6a7173EA306983f3721Cc9A3c6EA7f0a3a2f3c13', // pool address
        token_address: '0x6a7173EA306983f3721Cc9A3c6EA7f0a3a2f3c13', // pool address
        gauge_address: '0x0000000000000000000000000000000000000000', // this pool has no gauge
        is_plain: true,
        is_crypto: true,
        underlying_coins: ['FRAX', 'sFRAX'],
        wrapped_coins: ['FRAX', 'sFRAX'],
        underlying_coin_addresses: [
            '0x2CAb811d351B4eF492D8C197E09939F1C9f54330',
            '0x0Dbf64462FEC588df32FC5C9941421F7d93e0Fb3'
        ],
        wrapped_coin_addresses: [
            '0x2CAb811d351B4eF492D8C197E09939F1C9f54330',
            '0x0Dbf64462FEC588df32FC5C9941421F7d93e0Fb3'
        ],
        underlying_decimals: [18, 18],
        wrapped_decimals: [18, 18],
        swap_abi: twopoolSwapABI,
        gauge_abi: gaugeChildABI,
    },

   'dUSD-FRAX': {
        name: "dUSD-FRAX",
        full_name: "dUSD-FRAX",
        symbol: "dUSDFRAX",
        reference_asset: 'USD',
        swap_address: '0x1FCa361032eE8123cbeB82Ae2dfA169e4d56fcd0', // pool address
        token_address: '0x1FCa361032eE8123cbeB82Ae2dfA169e4d56fcd0', // pool address
        gauge_address: '0x0000000000000000000000000000000000000000', // this pool has no gauge
        is_plain: true,
        underlying_coins: ['dUSD', 'FRAX'],
        wrapped_coins: ['dUSD', 'FRAX'],
        underlying_coin_addresses: [
            '0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c',
            '0x2CAb811d351B4eF492D8C197E09939F1C9f54330'
        ],
        wrapped_coin_addresses: [
            '0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c',
            '0x2CAb811d351B4eF492D8C197E09939F1C9f54330'
        ],
        underlying_decimals: [6, 18],
        wrapped_decimals: [6, 18],
        swap_abi: twopoolSwapABI,
        gauge_abi: gaugeChildABI,
    }, 
});
