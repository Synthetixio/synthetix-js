module.exports = [
  {
    constant: true,
    inputs: [
      {
        name: 'account',
        type: 'address',
      },
    ],
    name: 'numVestingEntries',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'vest',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
