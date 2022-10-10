import { Box, Container, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../app.constant";
import { PeopleCard } from "../../components/PeopleCard";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";
import "./../../index.css";

function People(props) {
  const { totalPages } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const { peoples, getPeoples } = props;

  useEffect(() => {
    getPeoples({
      type: "peoples",
      actionFor: "Popular People",
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <Container spacing={1} sx={{ m: "10px 30px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          mb: "10px",
          textAlign: "center",
        }}
      >
        Popular People
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {peoples?.length > 0 ? (
          peoples?.map((obj, i) => (
            <PeopleCard textColor={COLORS.white} key={obj?.id} obj={obj} />
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
      <Pagination
        maxWidth={300}
        className="my-pagination"
        pageItemClassName="my-item"
        pageLinkClassName="my-link"
        activeItemClassName="my-active"
        srOnlyClassName=""
        current={currentPage}
        total={Number(totalPages)}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}

export default People;
