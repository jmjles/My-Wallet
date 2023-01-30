import LayoutMain from "@/layouts/LayoutMain";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { SetState } from "@/types";
import { getTrendingTokens, TrendingTokens } from "@/utils/connections";
import TokensList from "@/components/Tokens";

export default function Home() {
  const [setup, setSetup]: [boolean, SetState<boolean>] = useState(false);
  const [address, setAddress] = useState("");
  const [trendingTokens, setTrendingTokens]: [
    TrendingTokens[] | undefined,
    SetState<TrendingTokens[] | undefined>
  ] = useState();
  const [web3, setWeb3]: [undefined | Web3, SetState<undefined | Web3>] =
    useState();
  // Setup
  useEffect(() => {
    if (!setup) {
      (async () => {
        setWeb3(
          new Web3(
            "https://mainnet.infura.io/v3/005c4180bd1942ca9761de039a234b19"
          )
        );
        setTrendingTokens(await getTrendingTokens());
        setSetup(true);
      })();
    }
  }, [setup]);

  // Get User's Nfts
  useEffect(() => {
    if (web3 && address) {
    }
  }, [address, web3]);

  return (
    <LayoutMain address={[address, setAddress]}>
      <>
        <TokensList tokens={trendingTokens} />
      </>
    </LayoutMain>
  );
}
