import { Box, Button, Grid, Skeleton, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { COLORS } from "../../app.constant";
import { CustomCard } from "../../components";

function Show(props) {
  let [page, setPage] = useState(1);
  const { shows, getShows } = props;
  const { state } = useLocation();

  useEffect(() => {
    getShows({
      type: state?.type,
      actionFor: state?.actionFor || "Popular",
      page: page,
    });
  }, [page, state]);

  return (
    <Container
      maxWidth="md"
      spacing={2}
      sx={{ m: "50px 0px", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {shows?.length > 0 ? (
          shows?.map((obj, i) => (
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
          width: "100%",
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

export default Show;
