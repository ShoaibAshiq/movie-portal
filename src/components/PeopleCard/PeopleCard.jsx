import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { COLORS } from "./../../app.constant";
import { NavLink } from "react-router-dom";

function PeopleCard({ obj }) {
  return (
    <Box sx={{ width: "235px", height: "280px", padding: "0px", mb: "40px" }}>
      <Card>
        <CardActionArea>
          <NavLink to={`/peoples/${obj?.id}`}>
            <CardMedia
              sx={{ height: "235px", borderRadius: "4px" }}
              component="img"
              image={`${process.env.REACT_APP_IMG_URL}${obj?.profile_path}`}
              onError={(e) => {
                e.target.src =
                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
              }}
              alt="green iguana"
            />
          </NavLink>
        </CardActionArea>
        <CardContent sx={{ height: "50px", padding: "10px 10px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize="16px"
            fontWeight="600"
            color={COLORS.black}
          >
            {obj?.name}
          </Typography>
          <Typography color={COLORS.black} fontSize="15px" variant="body1">
            {obj?.known_for?.[0]?.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PeopleCard;
