import { TrendingTokens } from "@/utils/connections";
import { TableCell, TableRow, Typography as Font } from "@mui/material";
import React from "react";

const Token = (props: Props) => {
  const {
    name,
    symbol,
    date_added,
    last_updated,
    max_supply,
    circulating_supply,
  } = props.token;

  const data = [name, date_added, last_updated, max_supply, circulating_supply];
  return (
    <TableRow>
      {data.map((d, i) => (
        <TableCell key={i}>
          <Font>
            <>{d}</>
          </Font>
        </TableCell>
      ))}
    </TableRow>
  );
};
type Props = {
  token: TrendingTokens;
};
export default Token;
