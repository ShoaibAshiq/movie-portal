import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { COLORS } from "./../../app.constant";
import { NavLink } from "react-router-dom";

function TrailerCard({ obj, textColor }) {
  const url = obj?.release_date
    ? "movies"
    : obj?.first_air_date
    ? "shows"
    : window.location.pathname.split("/")?.[1];
  return (
    <Box
      sx={{
        width: "300px",
        borderRadius: "8px",
        ":hover": {
          transform: "translate(0px ,0px) scale(1.1,1.1)",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-in",
        },
      }}
    >
      <Card sx={{ width: "300px", boxShadow: "none" }}>
        <NavLink to={`/${url}/${obj?.id}`}>
          <CardActionArea sx={{ position: "relative" }}>
            <CardMedia
              sx={{ width: "300px", height: "169px" }}
              component="img"
              image={`${process.env.REACT_APP_IMG_URL}${obj?.poster_path}`}
              onError={(e) => {
                e.target.src =
                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
              }}
              alt="green iguana"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl: 1,
                pb: 1,
                position: "absolute",
                top: 0,
                transform: "translate(115%, 65%)",
              }}
            >
              <PlayArrowIcon
                sx={{ height: 70, width: 70, color: COLORS.white }}
              />
            </Box>
          </CardActionArea>
        </NavLink>
      </Card>
      <CardContent>
        <NavLink
          style={{ textDecoration: "none", color: textColor }}
          to={`/${url}/${obj?.id}`}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            textAlign="center"
          >
            {obj?.title ?? obj?.original_name}
          </Typography>
        </NavLink>
      </CardContent>
    </Box>
  );
}

export default TrailerCard;
