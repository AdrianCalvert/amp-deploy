const contractAddresses = require('./contractAddresses.json')

module.exports = {
  contractAddresses: contractAddresses,

  operators: {
    "1": [],
    "4": [
      '0xe0a1240b358dfa6c167edea09c763ae9f3b51ea0',
      '0x53ee745b3d30d692dc016450fef68a898c16fa44',
      '0xc8b74b6b883a96e3defd62934ec3a1e44f149860',
      '0xbf8e9e3f9dbb85554679ce8147077b0496358f53'
    ],

    testAccounts = {
      "1": [],
      "4": [
        "0xcc5697310277bcc3be506f53ed8aafc9d17a2c18",
        "0x3b89e78363d872c80c78c254bf1bb9ff9e586571",
        "0xf2934427c36ba897f9be6ed554ed2dbce3da1c68",
        "0xfa4f991caa4f37f7bce2e285e155da8c929658ef",
        "0xb21a999ba39015df00ee33e55caf08af86b46bfa",
        "0xdc64ae432d848cf38a89c6f30a04884e22e83c74",
        "0xbf8e9e3f9dbb85554679ce8147077b0496358f53",
        "0xc8b74b6b883a96e3defd62934ec3a1e44f149860",
        "0x53ee745b3d30d692dc016450fef68a898c16fa44",
        "0xe0a1240b358dfa6c167edea09c763ae9f3b51ea0"
      ]
    }
  },

  baseTokens: {
    "1": [
      'BNB',
      'OMG',
      'ZRX',
      'AE',
      'TRX',
      'MKR',
      'BAT',
      'REP',
      'BTM',
      'NPXS',
      'WTC',
      'KCS',
      'GNT',
      'PPT',
      'SNT',
      'DGX',
      'MITH',
      'AION',
      'LRC',
      'FUN',
      'KNC',
      'LOOM',
      'PRFT'
    ],

    "4": [
      'BNB',
      'OMG',
      'ZRX',
      'AE',
      'TRX',
      'MKR',
      'BAT',
      'REP',
      'BTM',
      'NPXS',
      'WTC',
      'KCS',
      'GNT',
      'PPT',
      'SNT',
      'DGX',
      'MITH',
      'AION',
      'LRC',
      'FUN',
      'KNC',
      'LOOM',
      'PRFT'
    ]
  },

  quoteTokens: {
    "1": [ "WETH", "DAI" ],
    "1": [ "WETH", "DAI" ],
  }
}