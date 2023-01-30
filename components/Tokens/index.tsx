import { TrendingTokens } from "@/utils/connections";
import { Table, TableBody, TableHead } from "@mui/material";
import React from "react";
import Token from "./Token";

const TokensList = (props: props) => {
  return (
    <Table>
      <TableBody>
        {props.tokens?.map((t) => (
          <Token token={t} key={t.id} />
        ))}
      </TableBody>
    </Table>
  );
};
type props = {
  tokens?: TrendingTokens[];
};
export default TokensList;
