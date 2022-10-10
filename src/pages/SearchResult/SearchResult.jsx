import { Box } from "@mui/material";
import React from "react";
import { NotFound } from "../../components";
import { SearchResultCard } from "../../components/SearchResultCard";

function SearchResult(props) {
  const { searchResult } = props;
  return (
    <Box sx={{ maxWidth: "1022px" }}>
      {searchResult?.length > 0 ? (
        searchResult?.map((result) => (
          <SearchResultCard searchResult={result} key={result?.id} />
        ))
      ) : (
        <NotFound state="Result not found !" />
      )}
    </Box>
  );
}

export default SearchResult;
