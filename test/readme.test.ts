import curve from "../src";
import { DictInterface } from "../src/interfaces";

const poolTest = async () => {
    await curve.init('JsonRpc', {url: 'http://localhost:8545/', privateKey: ''}, { gasPrice: 0, chainId: 1 });

    const pool = new curve.Pool('aave');
    console.log(pool.underlyingCoins);
    console.log(pool.coins);

    console.log(await pool.balances());

    console.log('// ADD LIQUIDITY');
    const expectedLpTokenAmount1 = await pool.addLiquidityExpected(['100', '100', '100']);
    console.log(expectedLpTokenAmount1);
    const addLiquidityTx1 = await pool.addLiquidity(['100', '100', '100']);
    console.log(addLiquidityTx1);

    console.log(await pool.balances());

    console.log('// ADD LIQUIDITY WRAPPED');
    const expectedLpTokenAmount2 = await pool.addLiquidityWrappedExpected(['100', '100', '100']);
    console.log(expectedLpTokenAmount2);
    const addLiquidityTx2 = await pool.addLiquidityWrapped(['100', '100', '100']);
    console.log(addLiquidityTx2);

    const balances = await pool.balances() as DictInterface<string>;
    console.log(balances);

    console.log('// GAUGE DEPOSIT');
    const gaugeDepositTx = await pool.gaugeDeposit(balances['lpToken']);
    console.log(gaugeDepositTx);

    console.log(await pool.balances());

    console.log('// GAUGE WITHDRAW');
    const gaugeWithdrawTx = await pool.gaugeWithdraw(balances['lpToken']);
    console.log(gaugeWithdrawTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY');
    const expectedUnderlyingCoinAmounts = await pool.removeLiquidityExpected('10');
    console.log(expectedUnderlyingCoinAmounts);
    const removeLiquidityTx = await pool.removeLiquidity('10');
    console.log(removeLiquidityTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY WRAPPED');
    const expectedCoinAmounts = await pool.removeLiquidityWrappedExpected('10');
    console.log(expectedCoinAmounts);
    const removeLiquidityWrappedTx = await pool.removeLiquidityWrapped('10');
    console.log(removeLiquidityWrappedTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY IMBALANCE');
    const expectedLpTokenAmount3 = await pool.removeLiquidityImbalanceExpected(['10', '10', '10']);
    console.log(expectedLpTokenAmount3);
    const removeLiquidityImbalanceTx = await pool.removeLiquidityImbalance(['10', '10', '10']);
    console.log(removeLiquidityImbalanceTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY IMBALANCE WRAPPED');
    const expectedLpTokenAmount4 = await pool.removeLiquidityImbalanceWrappedExpected(['10', '10', '10']);
    console.log(expectedLpTokenAmount4);
    const removeLiquidityImbalanceWrappedTx = await pool.removeLiquidityImbalanceWrapped(['10', '10', '10']);
    console.log(removeLiquidityImbalanceWrappedTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY ONE COIN');
    const expectedDAIAmount = await pool.removeLiquidityOneCoinExpected('10','DAI');
    // OR const expectedDAIAmount = await pool.removeLiquidityOneCoinExpected('10', 0);
    console.log(expectedDAIAmount);
    const removeLiquidityOneCoinTx = await pool.removeLiquidityOneCoin('10', 'DAI');
    // OR const removeLiquidityImbalanceTx = await pool.removeLiquidityOneCoin('10', 0);
    console.log(removeLiquidityOneCoinTx);

    console.log(await pool.balances());

    console.log('// REMOVE LIQUIDITY ONE COIN WRAPPED');
    const expectedADAIAmount = await pool.removeLiquidityOneCoinWrappedExpected('10', 'aUSDC');
    // OR const expectedADAIAmount = await pool.removeLiquidityOneCoinWrappedExpected('10', 1);
    console.log(expectedADAIAmount);
    const removeLiquidityOneCoinWrappedTx = await pool.removeLiquidityOneCoinWrapped('10', 'aUSDC');
    // OR const removeLiquidityImbalanceWrappedTx = await pool.removeLiquidityOneCoinWrapped('10', 1);
    console.log(removeLiquidityOneCoinWrappedTx);

    console.log(await pool.balances());
}

const exchangeTest = async () => {
    await curve.init('JsonRpc', {}, { gasPrice: 0, chainId: 1 });

    console.log(await curve.getBalances(['DAI', 'USDC']));

    const { poolAddress, output } = await curve.getBestPoolAndOutput('DAI', 'USDC', '100');
    // OR await curve.getBestPoolAndOutput('0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '100');
    const expected = await curve.exchangeExpected('DAI', 'USDC', '100');
    // OR await curve.exchangeExpected('0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '100');

    console.log(poolAddress, output, expected);

    await curve.exchange('DAI', 'USDC', '100')
    // OR await curve.exchange('0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '100');

    console.log(await curve.getBalances(['DAI', 'USDC']));
}

const crossAssetExchangeTest = async () => {
    await curve.init('JsonRpc', {}, { gasPrice: 0, chainId: 1 });

    console.log(await curve.getBalances(['DAI', 'WBTC']));

    console.log(await curve.crossAssetExchangeAvailable('DAI', 'WBTC'));
    console.log(await curve.crossAssetExchangeOutputAndSlippage('DAI', 'WBTC', '500'));
    console.log(await curve.crossAssetExchangeExpected('DAI', 'WBTC', '500'));

    const tx = await curve.crossAssetExchange('DAI', 'WBTC', '500');
    console.log(tx);

    console.log(await curve.getBalances(['DAI', 'WBTC']));
}

const boostingTest = async () => {
    await curve.init('JsonRpc', {}, { gasPrice: 0, chainId: 1 });

    console.log(await curve.boosting.getCrv());

    await curve.boosting.createLock('1000', 365);

    console.log(await curve.boosting.getCrv());
    console.log(await curve.boosting.getLockedAmountAndUnlockTime());
    console.log(await curve.boosting.getVeCrv());
    console.log(await curve.boosting.getVeCrvPct());


    await curve.boosting.increaseAmount('500');

    console.log(await curve.boosting.getCrv());
    console.log(await curve.boosting.getLockedAmountAndUnlockTime());
    console.log(await curve.boosting.getVeCrv());
    console.log(await curve.boosting.getVeCrvPct());

    await curve.boosting.increaseUnlockTime(365);

    console.log(await curve.boosting.getLockedAmountAndUnlockTime());
    console.log(await curve.boosting.getVeCrv());
    console.log(await curve.boosting.getVeCrvPct());
}