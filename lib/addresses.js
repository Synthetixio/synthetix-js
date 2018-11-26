const MAINNET_ADDRESSES = {
  HavvenUnderlying: '0xD989a04AD891528B571eF73dAcaEFeB0402a65b3',
  Mintr: '0xC011A72400E58ecD99Ee497CF89E3775d4bd732F', // same as Havven contract
  HavvenState: '0x5b1b5fea1b99d83ad479df0c222f0492385381dd',
  NominUnderlying: '0x92812526ebc2F4Df9E0B77dB74da0803B8F023fA',
  StablePayments: '0x92812526ebc2F4Df9E0B77dB74da0803B8F023fA',
  NominState: '0x2c1ab55bc8fa85589bee7fe5c6b563278eaf2e8f',
  Court: undefined,
  Escrow: '0x971e78e0C92392A4E39099835cF7E6aB535b2227',
  EscrowChecker: '0x3c9dF924b16b321847096a47d2d57D4A3259D060',
  Vestr: '0x971e78e0C92392A4E39099835cF7E6aB535b2227', // same as Escrow contract
  IssuanceController: '0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f',
  Depot: '0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f', //IssuanceController has been renamed to Depot
  Havven: '0xC011A72400E58ecD99Ee497CF89E3775d4bd732F',
  Nomin: '0x57Ab1E02fEE23774580C119740129eAC7081e9D3',
};

// Havven contracts to be updated on multicurrency release
const ROPSTEN_ADDRESSES = {};

export const KOVAN_ADDRESSES = {
  Mintr: '0x05754470d7a24730a0a52d52ee6161ba5434ae6f', // same as HavvenProxy
  HavvenProxy: '0x05754470d7a24730a0a52d52ee6161ba5434ae6f',
  Havven: '0x05754470d7a24730a0a52d52ee6161ba5434ae6f',
  HavvenUnderlying: '0x5f90987874116C7cfFBfF3AC6CFA9a12C8DEe2D7',
  HavvenState: '0x393eb37f19c5144c335100f794e9b1dd1297b6f7',
  StablePayments: '0x6ccd6e2426d63f10c957d245c130ca981d9e64e4', // same as NominProxy
  Nomin: '0x6ccd6e2426d63f10c957d245c130ca981d9e64e4',
  NominUnderlying: '0xfc137fa103ae958f2cc323d87277f5985044bce9',
  NominState: '0x0b4b3415202209e15451d0fe011dad568b63fd77',
  Escrow: '0xa9b437fb11e8634ae51e8f7ab8b71798f55d813a',
  Vestr: '0x971e78e0C92392A4E39099835cF7E6aB535b2227', // same as Escrow contract
  EscrowChecker: '',
  IssuanceController: '0xa9366Cf9B0Eb616b46771A41bb04E42D12C0F1fA',
  Depot: '0xa9366Cf9B0Eb616b46771A41bb04E42D12C0F1fA', //IssuanceController has been renamed to Depot
};

export default {
  1: MAINNET_ADDRESSES,
  42: KOVAN_ADDRESSES,
};
