import axios from "axios";
const latest = "/cryptocurrency/trending/latest";
const key = process.env.coinMarketKey;
const market = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1",
  headers: {
    "X-CMC_PRO_API_KEY": key,
  },
});

export const getTrendingTokens = async (): Promise<TrendingTokens[]> => {
  try {
    const res = await market(latest);
    return res.data;
  } catch {
    return [];
  }
};

export interface TrendingTokens {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  is_fiat: 0 | 1;
  self_reported_circulating_supply: number;
  self_reported_market_cap: number;
  is_active: 0 | 1;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  market_cap_by_total_supply: number;
  max_supply: number;
  last_updated: string;
  date_added: string;
  tags: string[];
  quotes: {
    [q: string]: Quote;
  };
}
interface Quote {
  price: number;
  volume_24h: number;
  volume_24h_reported: number;
  volume_7d: number;
  volume_7d_reported: number;
  volume_30d: number;
  volume_30d_reported: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  last_updated: string;
}
