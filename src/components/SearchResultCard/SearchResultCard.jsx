import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { COLORS } from "../../app.constant";

function SearchResultCard({ searchResult }) {
  const { name, profile_path, known_for_department } = searchResult;

  return (
  <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        m: "20px 0px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: { xs: "100%", sm: 91 } }}
        image={`${process.env.REACT_APP_IMG_URL}${
          searchResult?.poster_path ?? profile_path
        }`}
        onError={(e) => {
          e.target.src =
            "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
        }}
        alt={searchResult?.title ?? name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {searchResult?.title ?? name}
          </Typography>
          <Typography
            variant="subtitle1"
            color={COLORS.darkerGrey}
            component="div"
          >
            {searchResult?.release_date ?? known_for_department}
          </Typography>
          <Typography variant="p" color={COLORS.black} component="div">
            {searchResult?.overview?.substring(0, 250)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default SearchResultCard;
