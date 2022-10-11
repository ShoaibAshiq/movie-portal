import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { COLORS } from "./../../app.constant";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "./../../Utility/useDebounce";

function Search({ handleSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  
  useDebounce(
    () => {
      handleSearch({
        actionFor: "Search",
        search,
      });
    },
    [search],
    500
  );

  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        placeholder="Search for a movie, tv show, person"
        id="fullWidth"
        sx={{
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "10px 20px",
          },
          "& fieldset": { border: "none" },
          backgroundColor: COLORS.white,
          borderRadius: "30px",
          marginTop: "30px",
          fontSize: "16px",
          fontWeight: "800",
        }}
      />
      <Button
        sx={{
          ":hover": {
            color: COLORS.black,
          },
          fontWeight: "600",
          position: "absolute",
          top: "30px",
          borderRadius: "30px",
          padding: "9px 15px",
          right: "0px",
          color: COLORS.white,
          background: `linear-gradient(to right,  ${COLORS.tmdbLightGreen} ,  ${COLORS.tmdbLightBlue})`,
        }}
      >
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Search
        </Typography>
        <SearchIcon
          sx={{
            display: { xs: "block", sm: "none" },
            color: COLORS.tmdbDarkBlue,
          }}
        />
      </Button>
    </Box>
  );
}

export default Search;
