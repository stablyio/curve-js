import { PoolTemplate } from "./PoolTemplate";
import { poolBalancesAtricrypto3Mixin, poolBalancesMetaMixin, poolBalancesLendingMixin } from "./mixins/poolBalancesMixin";
import { depositSlippageMixin, depositWrappedSlippageMixin, depositSlippageCryptoMixin, depositWrappedSlippageCryptoMixin } from "./mixins/depositSlippageMixins";
import { depositLendingOrCryptoWithZapMixin, depositLendingOrCryptoMixin, depositMetaMixin, depositPlainMixin } from "./mixins/depositMixins";
import { depositWrapped2argsMixin, depositWrapped3argsMixin } from "./mixins/depositWrappedMixins";


export const getPool = (poolId: string): PoolTemplate => {
    const poolDummy = new PoolTemplate(poolId);
    class Pool extends PoolTemplate {}
    const isLending = poolDummy.useLending.reduce((a, b) => a || b)

    // getPoolBalances
    if (poolId === "atricrypto3") {
        Object.assign(Pool.prototype, poolBalancesAtricrypto3Mixin);
    } else if (poolDummy.isMeta) {
        Object.assign(Pool.prototype, poolBalancesMetaMixin);
    } else if (poolDummy.useLending.reduce((x, y) => x || y)) {
        Object.assign(Pool.prototype, poolBalancesLendingMixin);
    }

    // depositSlippage and depositWrappedSlippage
    if (poolDummy.isCrypto) {
        Object.assign(Pool.prototype, depositSlippageCryptoMixin);
        if (!poolDummy.isFake) Object.assign(Pool.prototype, depositWrappedSlippageCryptoMixin);
    } else {
        Object.assign(Pool.prototype, depositSlippageMixin);
        if (!poolDummy.isFake) Object.assign(Pool.prototype, depositWrappedSlippageMixin);
    }

    // deposit and depositEstimateGas
    if (isLending || poolDummy.isCrypto) {
        if (poolDummy.zap) {
            Object.assign(Pool.prototype, depositLendingOrCryptoWithZapMixin);
        } else {
            Object.assign(Pool.prototype, depositLendingOrCryptoMixin);
        }
    } else if (poolDummy.isMeta) {
        Object.assign(Pool.prototype, depositMetaMixin);
    } else {
        Object.assign(Pool.prototype, depositPlainMixin);
    }

    // depositWrapped and depositWrappedEstimateGas
    if ((isLending || poolDummy.isCrypto) && !poolDummy.zap) {
        Object.assign(Pool.prototype, depositWrapped3argsMixin);
    } else if ((isLending || poolDummy.isMeta || poolDummy.isCrypto) && !poolDummy.isFake) {
        Object.assign(Pool.prototype, depositWrapped2argsMixin);
    }

    return new Pool(poolId);
}
