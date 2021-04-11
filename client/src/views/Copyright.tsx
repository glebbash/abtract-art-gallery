import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import Link from "@material-ui/core/Link";

export const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/glebbash">
        Glebbash
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};
