import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import { COLORS } from "./../../app.constant";

function CustomCard({ obj }) {
  const url = obj?.release_date ? "movies" : obj?.first_air_date ? "shows" : window.location.pathname.split("/")?.[1];
  return (
    <Box sx={{ width: "158px", height: "339px" }}>
      <Card sx={{ width: "158px" }}>
        <NavLink to={`/${url}/${obj?.id}`}>
          <CardActionArea>
            <CardMedia
              sx={{ width: "158px", height: "239px", borderRadius: "4px" }}
              component="img"
              image={`${process.env.REACT_APP_IMG_URL}${obj?.poster_path}`}
              onError={(e) => {
                e.target.src =
                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
              }}
              alt="green iguana"
            />
          </CardActionArea>
        </NavLink>
        <CardContent sx={{ height: "98px", boxSizing: "border-box" }}>
          <NavLink
            style={{ textDecoration: "none", color: COLORS.black }}
            to={`/${url}/${obj?.id}`}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="14px"
              fontWeight="600"
              color={COLORS.black}
            >
              {obj?.title ?? obj?.original_name}
            </Typography>
          </NavLink>
          <Typography color={COLORS.black} fontSize="15px" variant="body1">
            {obj?.release_date ?? obj?.first_air_date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard;
