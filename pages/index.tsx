import LayoutMain from "@/layouts/LayoutMain";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  return (
    <LayoutMain address={[address, setAddress]}>
      <></>
    </LayoutMain>
  );
}
