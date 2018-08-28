import { utils } from 'ethers';

export default class FormattingUtils {
	static formatBigNumber(amount, decimals) {
		if (!amount) return '-';

		const amountString = utils.formatEther(amount, { commify: true });

		if (typeof decimals === 'undefined') {
			return amountString;
		} else {
			const [first, remainder] = amountString.split('.');
			let joined = `${first}.${remainder.substring(0, decimals)}`;

			if (joined.endsWith('.')) return joined.substring(0, joined.length - 1);

			return joined;
		}
	}

	static formatNumber(amount, decimal) {
		if (amount === '' || amount === null) {
			return '';
		}
		return parseFloat(amount).toFixed(decimal);
	}

	static formatNumberMaxDecimal(amount, decimal){
    return Math.round(amount * Math.pow(10,decimal)) / Math.pow(10,decimal);
	}
}
