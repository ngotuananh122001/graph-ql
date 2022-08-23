const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type NFT {
		token_id: String
		meta_data_url: String
		contract: Contract
	}

  type Contract {
		nft_contract_address: String
		nft_contract_name: String
    balance: [NFT]
	}

	# ROOT TYPE
	type Query {
		contracts: [Contract]
		nfts: [NFT]
	}
`

module.exports = typeDefs