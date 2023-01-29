import { connectWallet, formatAddress } from "@/utils/web3";
import { PersonOutlineRounded, Wallet } from "@mui/icons-material";
import { Button, Grid, Typography as Font } from "@mui/material";
import React from "react";

const Header = (props: props) => {
  const [address, setAddress] = props.address;
  const handleConnect = async () => {
    const address = await connectWallet();
    if (address) setAddress(address);
  };
  const RightContent = () => {
    return (
      <>
        {address === "" ? (
          <Button endIcon={<Wallet />} onClick={handleConnect}>
            Connect Wallet
          </Button>
        ) : (
          <Button startIcon={<PersonOutlineRounded />}>
            <Font variant="body1">{formatAddress(address)}</Font>
          </Button>
        )}
      </>
    );
  };
  return (
    <Grid container justifyContent="space-between">
      <Grid item alignSelf="center" visibility="hidden">
        <RightContent />
      </Grid>
      <Grid item>
        <Font variant="h1">My Wallet</Font>
      </Grid>
      <Grid item alignSelf="center">
        <RightContent />
      </Grid>
    </Grid>
  );
};
type props = {
  address: [String, Function];
};
export default Header;
