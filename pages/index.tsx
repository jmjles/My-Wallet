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
  const [web3, setWeb3] = useState(
    new Web3("https://mainnet.infura.io/v3/005c4180bd1942ca9761de039a234b19")
  );
  // Setup
  useEffect(() => {
    if (!setup) {
      (async () => {
        setTrendingTokens(await getTrendingTokens());
        try {
          window.ethereum?.on("accountsChanged", async (acc: string[]) => {
            setAddress(acc[0]);
          });
        } catch {
          return;
        }
        setSetup(true);
      })();
    }
  }, [setup, web3]);

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
