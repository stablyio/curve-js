import axios from "axios";
import memoize from "memoizee";
import {
    IExtendedPoolDataFromApi,
    IDict,
    INetworkName,
    IPoolType,
    IGaugesDataFromApi,
    IDaoProposal,
    IDaoProposalListItem,
    IVolumeAndAPYs,
} from "./interfaces";


export const _getPoolsFromApi = memoize(
    async (network: INetworkName, poolType: IPoolType): Promise<IExtendedPoolDataFromApi> => {
        const url = `https://api.curve.fi/api/getPools/${network}/${poolType}`;
        const response = await axios.get(url, { validateStatus: () => true });
        return response.data.data ?? { poolData: [], tvl: 0, tvlAll: 0 };
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _getAllPoolsFromApi = async (network: INetworkName): Promise<IExtendedPoolDataFromApi[]> => {
    if (network === "fraxtal-testnet") {
        return [{
            poolData: [
                {
                    id: "dTrinity_dUSD_FXS",
                    address: "0x1BBB5CAf76868698F00056f48f77ba13cfc5fE8D",
                    amplificationCoefficient: "20000000",
                    name: "dTrinity_dUSD_FXS",
                    symbol: "ddUSDFXS",
                    assetTypeName: "CRYPTO",
                    isMetaPool: false,
                    gaugeRewards: [],
                    usdTotal: 500000,
                    gaugeCrvApy: [null, null],
                    totalSupply: 218703338603451438341158,
                    implementationAddress: "0x1BBB5CAf76868698F00056f48f77ba13cfc5fE8D",
                    implementation: "twocrypto-optimized",
                    coins: [
                        {
                            address: "0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c",
                            decimals: "6",
                            symbol: "dUSD",
                            usdPrice: 1,
                        },
                        {
                            address: "0x98182ec55Be5091d653F9Df016fb1070add7a16E",
                            decimals: "18",
                            symbol: "FXS",
                            usdPrice: 4.42437174,
                        },
                    ],
                },
                {
                    id: "dTrinity_FRAX_sFRAX",
                    address: "0x6a7173EA306983f3721Cc9A3c6EA7f0a3a2f3c13",
                    amplificationCoefficient: "20000000", 
                    name: "dTrinity_FRAX_sFRAX",
                    symbol: "dFRAXsFRAX",
                    assetTypeName: "CRYPTO",
                    isMetaPool: false,
                    gaugeRewards: [],
                    usdTotal: 500000,
                    gaugeCrvApy: [null, null],
                    totalSupply: 524993787505290563442702,
                    implementationAddress: "0x6a7173EA306983f3721Cc9A3c6EA7f0a3a2f3c13",
                    implementation: "twocrypto-optimized",
                    coins: [
                        {
                            address: "0x2CAb811d351B4eF492D8C197E09939F1C9f54330",
                            decimals: "18",
                            symbol: "FRAX",
                            usdPrice: 1,
                        },
                        {
                            address: "0x0Dbf64462FEC588df32FC5C9941421F7d93e0Fb3",
                            decimals: "18",
                            symbol: "sFRAX",
                            usdPrice: 1.1,
                        },
                    ],
                },
                {
                    "id": "dTrinity_dUSD_FRAX",
                    "address": "0x1FCa361032eE8123cbeB82Ae2dfA169e4d56fcd0",
                    "amplificationCoefficient": "200",
                    "name": "dTrinity_dUSD_FRAX",
                    "symbol": "ddUSDFRAX",
                    "totalSupply": 2000019999999999983221107,
                    "assetTypeName": "unknown",
                    "isMetaPool": false,
                    "gaugeRewards": [],
                    "usdTotal": 2000000,
                    "gaugeCrvApy": [
                        null,
                        null,
                    ],
                    "implementationAddress": "0x1FCa361032eE8123cbeB82Ae2dfA169e4d56fcd0",
                    "implementation": "plainstableng",
                    "coins": [
                        {
                            "address": "0x4D6E79013212F10A026A1FB0b926C9Fd0432b96c",
                            "decimals": "6",
                            "symbol": "dUSD",
                            "usdPrice": "1",
                        },
                        {
                            "address": "0x2CAb811d351B4eF492D8C197E09939F1C9f54330",
                            "decimals": "18",
                            "symbol": "FRAX",
                            "usdPrice": "1",
                        },
                    ],
                },
            ],
            tvlAll: 3.000000023211136,
            tvl: 3.000000023211136,
        }]
    }
    return await Promise.all([
        _getPoolsFromApi(network, "main"),
        _getPoolsFromApi(network, "crypto"),
        _getPoolsFromApi(network, "factory"),
        _getPoolsFromApi(network, "factory-crvusd"),
        _getPoolsFromApi(network, "factory-eywa"),
        _getPoolsFromApi(network, "factory-crypto"),
        _getPoolsFromApi(network, "factory-twocrypto"),
        _getPoolsFromApi(network, "factory-tricrypto"),
        _getPoolsFromApi(network, "factory-stable-ng"),
    ]);
}

export const _getSubgraphData = memoize(
    async (network: INetworkName): Promise<IVolumeAndAPYs> => {
        const url = `https://api.curve.fi/api/getSubgraphData/${network}`;
        const response = await axios.get(url, { validateStatus: () => true });

        const poolsData = response.data.data.poolList.map((item: any) => {
            return {
                address: item.address,
                volumeUSD: item.volumeUSD,
                day: item.latestDailyApy,
                week: item.latestWeeklyApy,
            }
        })

        return {
            poolsData: poolsData ?? [],
            totalVolume: response.data.data.totalVolume ?? 0,
            cryptoVolume: response.data.data.cryptoVolume ?? 0,
            cryptoShare: response.data.data.cryptoShare ?? 0,
        };
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _getVolumes = memoize(
    async (network: string): Promise<IVolumeAndAPYs> => {

        const url = `https://api.curve.fi/api/getVolumes/${network}`;
        const response = await axios.get(url, { validateStatus: () => true });

        const poolsData = response.data.data.pools.map((item: any) => {
            return {
                address: item.address,
                volumeUSD: item.volumeUSD,
                day: item.latestDailyApyPcent,
                week: item.latestWeeklyApyPcent,
            }
        })

        return {
            poolsData: poolsData ?? [],
            totalVolume: response.data.data.totalVolumes.totalVolume ?? 0,
            cryptoVolume: response.data.data.totalVolumes.totalCryptoVolume ?? 0,
            cryptoShare: response.data.data.totalVolumes.cryptoVolumeSharePcent ?? 0,
        };
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _getFactoryAPYs = memoize(
    async (network: string): Promise<IVolumeAndAPYs> => {
        const urlStable = `https://api.curve.fi/api/getFactoryAPYs/${network}/stable`;
        const urlCrypto = `https://api.curve.fi/api/getFactoryAPYs/${network}/crypto`;
        const response = await Promise.all([
            axios.get(urlStable, { validateStatus: () => true }),
            axios.get(urlCrypto, { validateStatus: () => true }),
        ]);

        const stableVolume = response[0].data.data.totalVolumeUsd || response[0].data.data.totalVolume || 0;
        const cryptoVolume = response[1].data.data.totalVolumeUsd || response[1].data.data.totalVolume || 0;

        const poolsData = [...response[0].data.data.poolDetails, ...response[1].data.data.poolDetails].map((item) => {
            return {
                address: item.poolAddress,
                volumeUSD: item.totalVolumeUsd ?? 0,
                day: item.apy ?? 0,
                week: item.apy*7 ?? 0, //Because api does not return week apy
            }
        })

        return {
            poolsData: poolsData ?? [],
            totalVolume: stableVolume + cryptoVolume ?? 0,
            cryptoVolume: cryptoVolume ?? 0,
            cryptoShare: 100*cryptoVolume/(stableVolume + cryptoVolume) || 0,
        };
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

//4
export const _getTotalVolumes = memoize(
    async (network: string): Promise<{
        totalVolume: number;
        cryptoVolume: number;
        cryptoShare: number;
    }> => {
        if (network === "aurora") return {
            totalVolume: 0,
            cryptoVolume: 0,
            cryptoShare: 0,
        };  // Exclude Aurora

        const url = `https://api.curve.fi/api/getSubgraphData/${network}`;
        const response = await axios.get(url, { validateStatus: () => true });

        return response.data.data;
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _getAllGauges = memoize(
    async (): Promise<IDict<IGaugesDataFromApi>> => {
        const url = `https://api.curve.fi/api/getAllGauges`;
        const response = await axios.get(url, { validateStatus: () => true });

        return response.data.data;
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _getAllGaugesFormatted = memoize(
    async (): Promise<IDict<any>> => {
        const url = `https://api.curve.fi/api/getAllGauges`;
        const response = await axios.get(url, { validateStatus: () => true });

        const gaugesDict: Record<string, any> = {}

        Object.values(response.data.data).forEach((d: any) => {
            gaugesDict[d.gauge.toLowerCase()] = {
                is_killed: d.is_killed ?? false,
                gaugeStatus: d.gaugeStatus ?? null,
            }
        });

        return gaugesDict;
    },
    {
        promise: true,
        maxAge: 60 * 60 * 1000, // 60m
    }
)

export const _getHiddenPools = memoize(
    async (): Promise<IDict<string[]>> => {
        const url = `https://api.curve.fi/api/getHiddenPools`;
        const response = await axios.get(url, { validateStatus: () => true });

        return response.data.data;
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)

export const _generateBoostingProof = memoize(
    async (block: number, address: string): Promise<{ block_header_rlp: string, proof_rlp: string }> => {
        const url = `https://prices.curve.fi/v1/general/get_merkle_proof?block=${block}&account_address=${address}`;
        const response = await axios.get(url, { validateStatus: () => true });

        return { block_header_rlp: response.data.block_header_rlp, proof_rlp: response.data.proof_rlp };
    },
    {
        promise: true,
        maxAge: 5 * 60 * 1000, // 5m
    }
)


// --- DAO ---

export const _getDaoProposalList = memoize(async (): Promise<IDaoProposalListItem[]> => {
    const url = "https://api-py.llama.airforce/curve/v1/dao/proposals";
    const response = await axios.get(url, { validateStatus: () => true });

    return response.data.proposals;
},
{
    promise: true,
    maxAge: 5 * 60 * 1000, // 5m
})

export const _getDaoProposal = memoize(async (type: "PARAMETER" | "OWNERSHIP", id: number): Promise<IDaoProposal> => {
    const url = `https://api-py.llama.airforce/curve/v1/dao/proposals/${type.toLowerCase()}/${id}`;
    const response = await axios.get(url, { validateStatus: () => true });

    return response.data;
},
{
    promise: true,
    maxAge: 5 * 60 * 1000, // 5m
})