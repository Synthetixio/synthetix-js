const utils = require('ethers').utils;

const Side = {
  Long: 0,
  Short: 1,
};

const toBN = utils.bigNumberify;
const toUnit = utils.parseEther;

const UNIT = toUnit('1');

const mulDecRound = (x, y) => {
  let result = x.mul(y).div(toUnit('0.1'));
  if (result.mod(toBN(10)).gte(toBN(5))) {
    result = result.add(toBN(10));
  }
  return result.div(toBN(10));
};

const divDecRound = (x, y) => {
  let result = x.mul(toUnit('10')).div(y);
  if (result.mod(toBN(10)).gte(toBN(5))) {
    result = result.add(toBN(10));
  }
  return result.div(toBN(10));
};

function exercisableDeposits({ resolved, deposited, fee }) {
  return resolved ? deposited : mulDecRound(deposited, UNIT.sub(fee));
}

function computePrices({ longBids, shortBids, resolved, deposited, fee }) {
  const optionsPerSide = exercisableDeposits({ resolved, deposited, fee });
  return {
    long: divDecRound(longBids, optionsPerSide),
    short: divDecRound(shortBids, optionsPerSide),
  };
}

function subToZero(a, b) {
  return a.lte(b) ? toBN(0) : a.sub(b);
}

export function pricesAfterBidOrRefund({
  side,
  value,
  refund,
  longBids,
  shortBids,
  fee,
  refundFee,
  resolved,
  deposited,
}) {
  const sub = (a, b) => a.sub(b);
  const add = (a, b) => a.add(b);

  const operation = refund ? sub : add;

  if (side === Side.Long) {
    longBids = operation(longBids, value);
  } else {
    shortBids = operation(shortBids, value);
  }

  if (refund) {
    value = mulDecRound(value, UNIT.sub(refundFee));
  }

  return computePrices({
    longBids,
    shortBids,
    resolved,
    deposited: operation(deposited, value),
    fee,
  });
}

export function bidOrRefundForPrice({
  bidSide,
  priceSide,
  price,
  refund,
  fee,
  refundFee,
  longBids,
  shortBids,
  deposited,
}) {
  let adjustedPrice = mulDecRound(price, UNIT.sub(fee));
  let bids = bidSide === Side.Long ? longBids : shortBids;

  if (bidSide === priceSide) {
    let depositedByPrice = mulDecRound(deposited, adjustedPrice);

    if (refund) {
      [depositedByPrice, bids] = [bids, depositedByPrice];
      adjustedPrice = mulDecRound(adjustedPrice, UNIT.sub(refundFee));
    }
    return divDecRound(subToZero(depositedByPrice, bids), UNIT.sub(adjustedPrice));
  } else {
    let bidsPerPrice = divDecRound(bids, adjustedPrice);

    if (refund) {
      [bidsPerPrice, deposited] = [deposited, bidsPerPrice];
    }

    const value = subToZero(bidsPerPrice, deposited);
    return refund ? divDecRound(value, UNIT.sub(refundFee)) : value;
  }
}
