const { nfts, contracts } = require('../data/static')

const resolvers = {
  Query: {
    contracts: () => contracts,
    nfts: () => nfts
  },

  Contract: {
    balance: (parent, args) => nfts.filter(nft => nft.nft_contract_address === parent.nft_contract_address)
  }
}

module.exports = resolvers