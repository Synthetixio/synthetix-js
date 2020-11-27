const KOVAN_SYNTHS = [
  {
    asset: 'USD',
    category: 'forex',
    sign: '$',
    description: 'US Dollars',
    name: 'sUSD',
    subclass: 'MultiCollateralSynth',
  },
  {
    feed: '0x9326BFA02ADD2366b30bacB125260Af641031331',
    asset: 'ETH',
    category: 'crypto',
    sign: 'Ξ',
    description: 'Ether',
    name: 'sETH',
    subclass: 'MultiCollateralSynth',
  },
];

export default {
  42: KOVAN_SYNTHS,
};
