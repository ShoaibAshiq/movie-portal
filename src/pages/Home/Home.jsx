import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Section, Search, TrailerCard, CustomCard } from "../../components";
import bgImage from "./../../assets/images/hero-section-bg.jpg";
import { COLORS } from "./../../app.constant";
import Skeleton from "@mui/material/Skeleton";
import SearchResult from "../SearchResult/SearchResult";

function Home(props) {
  const {
    popular,
    freeToWatch,
    trailer,
    trending,
    searchResult,
    handleWhatsPopular,
    handleFreeToWatch,
    handleLatestTrailer,
    handleTrending,
    handleSearch,
  } = props;

  useEffect(() => {
    handleWhatsPopular({ page: 1, actionFor: "Streaming" });
    handleFreeToWatch({ page: 1, actionFor: "Movies" });
    handleLatestTrailer({ page: 1, actionFor: "Streaming" });
    handleTrending({ page: 1, actionFor: "popular" });
  }, []);

  console.log("search result : ", searchResult);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1300px",
          color: "#fff",
          backgroundImage: `linear-gradient(to right bottom,  ${COLORS.tmdbDarkBlue}CC ,  ${COLORS.tmdbDarkBlue}00), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box padding="30px 40px">
          <Typography
            sx={{
              m: "30px 0 0 0 ",
              fontSize: { xs: "24px", sm: "36px", md: "48px" },
              lineHeight: "1",
              fontWeight: "700",
            }}
            variant="h1"
            gutterBottom
          >
            Welcome.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18", sm: "26", md: "32px" },
              fontWeight: "600",
            }}
            variant="subtitle1"
            gutterBottom
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <Search handleSearch={handleSearch} />
        </Box>
      </Container>
      {searchResult.length > 0 ? (
        <SearchResult searchResult={searchResult} />
      ) : (
        <>
          <Section
            heading={"What's Popular"}
            tabsOption={["Streaming", "On Tv", "For Rent", "In Theaters"]}
            handleAction={handleWhatsPopular}
          >
            {popular?.length > 0 ? (
              popular?.map((obj, i) => (
                <CustomCard
                  isShadow={false}
                  textColor={COLORS.white}
                  key={obj?.id}
                  obj={obj}
                />
              ))
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={200}
              />
            )}
          </Section>
          <Section
            heading={"Free To Watch"}
            tabsOption={["Movies", "Tv"]}
            handleAction={handleFreeToWatch}
          >
            {freeToWatch?.length > 0 ? (
              freeToWatch?.map((obj, i) => (
                <CustomCard key={obj?.id} obj={obj} />
              ))
            ) : (
              <Skeleton
                animation="wave"
                variant="reactangle"
                width="100%"
                height={200}
              />
            )}
          </Section>
          <Container
            maxWidth={false}
            sx={{
              maxWidth: "1300px",
              backgroundImage: `linear-gradient(to right bottom,  ${COLORS.tmdbDarkBlue}CC ,  ${COLORS.tmdbDarkBlue}00), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Section
              isShadow={false}
              backgroundColor={COLORS.tmdbLighterGreen}
              textColor={COLORS.white}
              heading={"Latest Trailers"}
              tabsOption={["popular", "On Tv", "For Rent", "In Theaters"]}
              handleAction={handleLatestTrailer}
            >
              {trailer?.length > 0 ? (
                trailer?.map((obj, i) => (
                  <TrailerCard
                    textColor={COLORS.white}
                    key={obj?.id}
                    obj={obj}
                  />
                ))
              ) : (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={200}
                />
              )}
            </Section>
          </Container>
          <Section
            heading={"Trending"}
            tabsOption={["Today", "This Week"]}
            handleAction={handleTrending}
          >
            {trending?.length > 0 ? (
              trending?.map((obj, i) => <CustomCard key={obj?.id} obj={obj} />)
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={200}
              />
            )}
          </Section>
        </>
      )}
    </>
  );
}

export default Home;
