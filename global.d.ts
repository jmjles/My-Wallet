import { providers } from "ethers";
declare global {
  interface Window {
    ethereum?: Provider;
  }
}
interface Provider extends providers.ExternalProvider {
  on: (arg0?: string, cb?: Function) => Promise<any>;
}
