import aaveSwapABI from '../abis/aave/swap.json';
import paaveRewardsabi from '../abis/paave/rewards.json';
import renSwapABI from '../abis/ren-polygon/swap.json';
import atricrypto3Swap from '../abis/atricrypto3/swap.json';
import atricrypto3Zap from '../abis/atricrypto3/zap.json';
import eurtusdSwap from '../abis/eurtusd/swap.json';
import eurtusdZap from '../abis/eurtusd/deposit.json';
import gaugeRewardsOnlyABI from '../abis/gauge_rewards_only.json';
import { lowerCasePoolDataAddresses } from "../utils";
import {IPoolData} from "../../interfaces";


export const POOLS_DATA_POLYGON: { [index: string]: IPoolData } = lowerCasePoolDataAddresses({
    aave: {
        name: "aave",
        full_name: "aave",
        symbol: "aave",
        reference_asset: 'USD',
        swap_address: '0x445FE580eF8d70FF569aB36e80c647af338db351',
        token_address: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
        gauge_address: '0x19793B454D3AfC7b454F206Ffe95aDE26cA6912c',
        sCurveRewards_address: '0xBdFF0C27dd073C119ebcb1299a68A6A92aE607F0',
        reward_contract: "0xC48f4653dd6a9509De44c92beb0604BEA3AEe714",
        is_lending: true,
        underlying_coins: ['DAI', 'USDC', 'USDT'],
        wrapped_coins: ['amDAI', 'amUSDC', 'amUSDT'],
        underlying_coin_addresses: [
            '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
            '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
            '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        ],
        wrapped_coin_addresses: [
            '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
            '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
            '0x60D55F02A771d515e077c9C2403a1ef324885CeC',
        ],
        underlying_decimals: [18, 6, 6],
        wrapped_decimals: [18, 6, 6],
        use_lending: [true, true, true],
        reward_tokens: ["0x172370d5cd63279efa6d502dab29171933a610af"],
        reward_decimals: [18],
        swap_abi: aaveSwapABI,
        gauge_abi: gaugeRewardsOnlyABI,
        sCurveRewards_abi: paaveRewardsabi,
    },

    ren: {
        name: "ren",
        full_name: "ren",
        symbol: "ren",
        reference_asset: 'BTC',
        swap_address: '0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67',
        token_address: '0xf8a57c1d3b9629b77b6726a042ca48990A84Fb49',
        gauge_address: '0xffbACcE0CC7C19d46132f1258FC16CF6871D153c',
        reward_contract: "0x488E6ef919C2bB9de535C634a80afb0114DA8F62",
        is_lending: true,
        underlying_coins: ['WBTC', 'renBTC'],
        wrapped_coins: ['amWBTC', 'renBTC'],
        underlying_coin_addresses: [
            '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
            '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
        ],
        wrapped_coin_addresses: [
            '0x5c2ed810328349100A66B82b78a1791B101C9D61',
            '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
        ],
        underlying_decimals: [8, 8],
        wrapped_decimals: [8, 8],
        use_lending: [true, false],
        reward_tokens: ["0x172370d5cd63279efa6d502dab29171933a610af"],
        reward_decimals: [18],
        swap_abi: renSwapABI,
        gauge_abi: gaugeRewardsOnlyABI,
    },

    atricrypto3: {
        name: "atricrypto3",
        full_name: "atricrypto3",
        symbol: "atricrypto3",
        reference_asset: 'CRYPTO',
        swap_address: '0x92215849c439E1f8612b6646060B4E3E5ef822cC',
        token_address: '0xdAD97F7713Ae9437fa9249920eC8507e5FbB23d3',
        gauge_address: '0x3B6B158A76fd8ccc297538F454ce7B4787778c7C',
        deposit_address: '0x1d8b86e3D88cDb2d34688e87E72F388Cb541B7C8',
        reward_contract: "0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F",
        is_meta: true,
        is_crypto: true,
        is_fake: true,
        base_pool: 'aave',
        underlying_coins: ['DAI', 'USDC', 'USDT', 'WBTC', 'WETH'],
        wrapped_coins: ['am3CRV', 'amWBTC', 'amWETH'],
        underlying_coin_addresses: [
            '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
            '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
            '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
            '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', // WBTC
            '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
        ],
        wrapped_coin_addresses: [
            '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171', // am3CRV
            '0x5c2ed810328349100A66B82b78a1791B101C9D61', // amWBTC
            '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390', // amWETH
        ],
        underlying_decimals: [18, 6, 6, 8, 18],
        wrapped_decimals: [18, 8, 18],
        reward_tokens: ["0x172370d5cd63279efa6d502dab29171933a610af"],
        reward_decimals: [18],
        swap_abi: atricrypto3Swap,
        gauge_abi: gaugeRewardsOnlyABI,
        deposit_abi: atricrypto3Zap,
    },

    eurtusd: {
        name: "eurtusd",
        full_name: "eurtusd",
        symbol: "eurtusd",
        reference_asset: 'CRYPTO',
        swap_address: '0xB446BF7b8D6D4276d0c75eC0e3ee8dD7Fe15783A',
        token_address: '0x600743B1d8A96438bD46836fD34977a00293f6Aa',
        gauge_address: '0x40c0e9376468b4f257d15F8c47E5D0C646C28880',
        deposit_address: '0x225FB4176f0E20CDb66b4a3DF70CA3063281E855',
        reward_contract: "0xAF78381216a8eCC7Ad5957f3cD12a431500E0B0D",
        is_meta: true,
        is_crypto: true,
        base_pool: 'aave',
        underlying_coins: ['EURT', 'DAI', 'USDC', 'USDT'],
        wrapped_coins: ['EURT', 'am3CRV'],
        underlying_coin_addresses: [
            '0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f', // EURT
            '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
            '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
            '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
        ],
        wrapped_coin_addresses: [
            '0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f', // EURT
            '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171', // am3CRV
        ],
        underlying_decimals: [6, 18, 6, 6],
        wrapped_decimals: [6, 18],
        reward_tokens: ["0x172370d5cd63279efa6d502dab29171933a610af"],
        reward_decimals: [18],
        swap_abi: eurtusdSwap,
        gauge_abi: gaugeRewardsOnlyABI,
        deposit_abi: eurtusdZap,
    },
});