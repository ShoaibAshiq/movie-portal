import { Typography } from "@mui/material";
import React from "react";

function NotFound({ state }) {
  return (
    <Typography sx={{ p: "50px", height: 250 }}>
      {state ?? "Error"}. Please try again.
    </Typography>
  );
}

export default NotFound;
