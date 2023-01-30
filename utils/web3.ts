export const web3Enabled = () => typeof window.ethereum !== "undefined";

export const connectWallet = async () => {
  try {
    const accounts = await window.ethereum?.request?.({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (er) {
    console.log(er);
    return false;
  }
};

export const formatAddress = (address: string) => {
  const start = address.substring(0, 3);
  const end = address.substring(address.length - 4);
  return `${start}...${end}`;
};
