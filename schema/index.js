// Imports

// Schema Start
export default `
  type cmc_all {
    id: ID!
    name: String!
    symbol: String!
    price_usd: Float!
    available_supply: Float
    last_updated: Int!
    market_cap_usd: Float
    percent_change_1h: Float
    percent_change_24h: Float
    percent_change_7d: Float
    price_btc: Float
    rank: Int
    total_supply: Float
  }

  type Query {
    allcmc: [cmc_all!]!
  }
`;
// Exports
