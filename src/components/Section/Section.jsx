import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Scroller } from "../Scroller";
import { COLORS } from "./../../app.constant";
import { DropDown } from "./../DropDown";

function Section({ heading, handleAction, children, tabsOption, textColor , isShadow }) {
  const [value, setValue] = React.useState(0);

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  //   handleAction({
  //     page: 1,
  //     actionFor: e.currentTarget.name,
  //   });
  // };

  return (
    <Container
    maxWidth={false}
      sx={{
        maxWidth:"1350px",
        paddingTop: "20px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: "30px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontSize: { sm: "16px", md: "24px" },
            fontWeight: "600",
            pl: "16px",
            color: textColor ?? COLORS.black,
          }}
        >
          {heading}
        </Typography>
        <Box
          sx={{
            pl: "10px",
            display: {
              sm: "none",
            },
          }}
        >
          <DropDown handleAction={handleAction} options={tabsOption} />
        </Box>
        {tabsOption && (
          <Tabs
            value={value}
            onChange={(e, v) => {
              setValue(v);
              handleAction({
                page: 1,
                actionFor: e.currentTarget.name,
              });
            }}
            aria-label="secondary tabs example"
            sx={{
              display: {
                lg: "inline-flex",
                md: "inline-flex",
                sm: "inline-flex",
                xs: "none",
              },
              height: "30px",
              minHeight: "30px",
              border: `1px solid  ${
                textColor ? COLORS.tmdbLightGreen : COLORS.tmdbDarkBlue
              }`,
              borderRadius: "20px",
              marginLeft: "20px",
              ".MuiTabs-indicator": { display: "none" },
              ".Mui-selected": {
                backgroundColor: textColor
                  ? COLORS.tmdbLightGreen
                  : COLORS.black,
                borderRadius: "20px",
              },
            }}
          >
            {tabsOption?.map((opt, i) => (
              <Tab
                key={opt}
                sx={{
                  height: "30px",
                  minHeight: "30px",
                  color: textColor ?? COLORS.black,
                  "&.Mui-selected": {
                    backgroundColor: textColor
                      ? COLORS.tmdbLightGreen
                      : COLORS.tmdbDarkBlue,
                    color: textColor
                      ? COLORS.tmdbDarkBlue
                      : COLORS.tmdbLightGreen,
                  },
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in",
                }}
                name={opt}
                value={i}
                label={opt}
              />
            ))}
          </Tabs>
        )}
      </Box>
      <Scroller>{children}</Scroller>
    </Container>
  );
}

export default Section;
