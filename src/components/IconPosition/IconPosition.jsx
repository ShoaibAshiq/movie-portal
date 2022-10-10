import { Box } from "@mui/system";
import React from "react";
import { COLORS } from "../../app.constant";

function IconPosition({ children }) {
  return (
    <Box
      sx={{
        ml:"10px",
        display: "flex",
        width: "50px",
        height: "50px",
        backgroundColor: COLORS.tmdbDarkBlue,
        color: COLORS.tmdbLightGreen,
        borderRadius: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default IconPosition;
