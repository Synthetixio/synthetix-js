export default [
  {
    inputs: [
      {
        internalType: 'contract IAddressResolver',
        name: '_resolverProxy',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    constant: true,
    inputs: [],
    name: 'allMarketSummaries',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'market', type: 'address' },
          { internalType: 'bytes32', name: 'asset', type: 'bytes32' },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'marketSize',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'marketSkew',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'marketDebt',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'currentFundingRate',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketSummary[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x3c88ee18',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'contract FuturesMarket',
        name: 'market',
        type: 'address',
      },
    ],
    name: 'marketDetails',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'market', type: 'address' },
          {
            internalType: 'bytes32',
            name: 'baseAsset',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxLeverage',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxMarketDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minInitialMargin',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketLimits',
            name: 'limits',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxFundingRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateSkew',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateDelta',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.FundingParameters',
            name: 'fundingParameters',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'marketSize',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'short',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'long',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct FuturesMarketData.Sides',
                name: 'sides',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'marketDebt',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'marketSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'proportionalSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'entryMarginSumMinusNotionalSkew',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'pendingOrderValue',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketSizeDetails',
            name: 'marketSizeDetails',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'price',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'currentRoundId',
                type: 'uint256',
              },
              { internalType: 'bool', name: 'isInvalid', type: 'bool' },
            ],
            internalType: 'struct FuturesMarketData.PriceDetails',
            name: 'priceDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x730e0037',
  },
  {
    constant: true,
    inputs: [{ internalType: 'bytes32', name: 'asset', type: 'bytes32' }],
    name: 'marketDetailsForAsset',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'market', type: 'address' },
          {
            internalType: 'bytes32',
            name: 'baseAsset',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxLeverage',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxMarketDebt',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minInitialMargin',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketLimits',
            name: 'limits',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxFundingRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateSkew',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateDelta',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.FundingParameters',
            name: 'fundingParameters',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'marketSize',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'short',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'long',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct FuturesMarketData.Sides',
                name: 'sides',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'marketDebt',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'marketSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'proportionalSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'entryMarginSumMinusNotionalSkew',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'pendingOrderValue',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketSizeDetails',
            name: 'marketSizeDetails',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'price',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'currentRoundId',
                type: 'uint256',
              },
              { internalType: 'bool', name: 'isInvalid', type: 'bool' },
            ],
            internalType: 'struct FuturesMarketData.PriceDetails',
            name: 'priceDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xccb045b9',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address[]', name: 'markets', type: 'address[]' }],
    name: 'marketSummaries',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'market', type: 'address' },
          { internalType: 'bytes32', name: 'asset', type: 'bytes32' },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'marketSize',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'marketSkew',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'marketDebt',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'currentFundingRate',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketSummary[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xa9e0bef7',
  },
  {
    constant: true,
    inputs: [{ internalType: 'bytes32[]', name: 'assets', type: 'bytes32[]' }],
    name: 'marketSummariesForAssets',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'market', type: 'address' },
          { internalType: 'bytes32', name: 'asset', type: 'bytes32' },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'marketSize',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'marketSkew',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'marketDebt',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'currentFundingRate',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketSummary[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0c1ea85c',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'contract FuturesMarket',
        name: 'market',
        type: 'address',
      },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'positionDetails',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'bool', name: 'pending', type: 'bool' },
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'leverage',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'fee', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'roundId',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              { internalType: 'int256', name: 'size', type: 'int256' },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryIndex',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Position',
            name: 'position',
            type: 'tuple',
          },
          {
            internalType: 'int256',
            name: 'notionalValue',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'profitLoss',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'accruedFunding',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'remainingMargin',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.PositionData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x808bad34',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'bytes32', name: 'asset', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'positionDetailsForAsset',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'bool', name: 'pending', type: 'bool' },
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'leverage',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'fee', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'roundId',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              { internalType: 'int256', name: 'size', type: 'int256' },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryIndex',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Position',
            name: 'position',
            type: 'tuple',
          },
          {
            internalType: 'int256',
            name: 'notionalValue',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'profitLoss',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'accruedFunding',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'remainingMargin',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.PositionData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x39c93192',
  },
  {
    constant: true,
    inputs: [],
    name: 'resolverProxy',
    outputs: [
      {
        internalType: 'contract IAddressResolver',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6a59e495',
  },
];
