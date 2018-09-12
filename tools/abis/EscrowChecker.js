module.exports = [
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'checkAccountSchedule',
    outputs: [{ name: '', type: 'uint256[16]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'havven_escrow',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
