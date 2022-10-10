import React, { useEffect, useState } from "react";
import { CustomCard } from "./../../components/CustomCard";
import { Skeleton, Container, Box, Button } from "@mui/material";
import { COLORS } from "../../app.constant";
import { useLocation } from "react-router-dom";

function Movie(props) {
  let [page, setPage] = useState(1);
  const { movies, getMovies } = props;
  const { state } = useLocation();

  useEffect(() => {
    getMovies({
      type: state?.type,
      actionFor: state?.actionFor || "Popular",
      page: page,
    });
  }, [page, state]);

  return (
    <Container
      maxWidth="md"
      spacing={2}
      sx={{
        display: "flex",
        m: "50px 0px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {movies?.length > 0 ? (
          movies?.map((obj, i) => (
            <CustomCard textColor={COLORS.white} key={obj?.id} obj={obj} />
          ))
        ) : (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={200}
          />
        )}
      </Box>
      <Button
        sx={{
          ":hover": {
            backgroundColor: COLORS.tmdbLightBlue,
          },
          backgroundColor: COLORS.tmdbLightBlue,
          color: COLORS.white,
          mt: "20px",
          justifyContent: "center",
          fontWeight: "700",
        }}
        onClick={() => setPage(page + 1)}
      >
        Load More
      </Button>
    </Container>
  );
}

export default Movie;
