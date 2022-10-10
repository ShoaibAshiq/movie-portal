import React from "react";
import { Container } from "@mui/system";
import { COLORS } from "./../../app.constant";
function Scroller(props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        columnGap: "20px",
        overflowX: "scroll",
        mt: "20px",
        mb: "20px",
        paddingBottom: "20px",
        "::-webkit-scrollbar": {
          width: "2px",
          height: "9px",
          marginRight: "5px",
        },
        " ::-webkit-scrollbar-track": {
          borderRadius: "100px",
        },
        " ::-webkit-scrollbar-thumb": {
          background: COLORS.lightGrey,
          borderRadius: "100px",
        },
      }}
    >
      {props.children}
    </Container>
  );
}
export default Scroller;
