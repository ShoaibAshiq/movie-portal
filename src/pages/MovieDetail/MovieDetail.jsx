import {
  CardMedia,
  CircularProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { COLORS } from "../../app.constant";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import IconPosition from "../../components/IconPosition/IconPosition";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

function MovieDetail(props) {
  const { movieDetail, movieReviews, getMovieDetails, getMovieReviews } = props;
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails({
      movie_id: id,
      type: "movies",
      actionFor: "Movie Details",
    });

    getMovieReviews({
      movie_id: id,
      type: "movies",
      actionFor: "Reviews",
    });
  }, []);

  return movieDetail?.original_title != null ? (
    <Container maxWidth={false}>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          padding: "30px 40px",
          margin: "40px 0px",
          backgroundImage: `linear-gradient(to right,  #dddddd ,   #ddddddd6) , url(${process.env.REACT_APP_IMG_URL}${movieDetail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardMedia
          sx={{
            maxWidth: "300px",
            maxHeight: "450px",
            borderRadius: "4px",
            margin: { xs: "0px", md: "0px 24px" },
          }}
          component="img"
          image={`${process.env.REACT_APP_IMG_URL}${movieDetail?.poster_path}`}
          onError={(e) => {
            e.target.src =
              "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
          }}
          alt="green iguana"
        />
        <Container sx={{ p: "0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: { xs: "20px", sm: "20px", md: "0px" },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              pr="10px"
              sx={{ fontSize: { xs: "18px", sm: "26px" } }}
            >
              {movieDetail?.original_title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              p: "10px 0",
            }}
          >
            <Typography variant="body1" pr="5px">
              {movieDetail?.release_date}
            </Typography>
            <Typography variant="body1">
              ({movieDetail?.production_countries?.[0]?.iso_3166_1})
            </Typography>
            <FiberManualRecordSharpIcon
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "7px",
                p: "0px 5px",
              }}
            />
            {movieDetail?.genres?.map((genre) => (
              <Typography
                variant="body1"
                key={genre.name}
                sx={{ p: { xs: "0px", sm: "0px 5px" } }}
              >
                {genre?.name}
              </Typography>
            ))}
            <FiberManualRecordSharpIcon
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "7px",
                p: "0px 5px",
              }}
            />
            <Typography variant="body1">{movieDetail?.runtime} m</Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Box sx={{ width: "60px", height: "60px" }}>
              <CircularProgress
                size="lg"
                variant="determinate"
                value={movieDetail?.vote_average * 10}
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: COLORS.tmdbDarkBlue,
                  color: COLORS.tmdbLightGreen,
                  borderRadius: "30px",
                  padding: "1px",
                }}
              ></CircularProgress>
            </Box>
            <Typography
              sx={{
                position: "absolute",
                top: "17px",
                left: "17px",
              }}
              variant="body1"
              color={COLORS.white}
              fontWeight="600"
            >
              {movieDetail?.vote_average
                ? (movieDetail?.vote_average * 10).toFixed(0)
                : ""}%
            </Typography>
            <Typography
              sx={{ pl: "10px", fontWeight: "700", color: COLORS.tmdbDarkBlue }}
            >
              User <br /> Score
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconPosition>
                <ListSharpIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    padding: "1px",
                  }}
                />
              </IconPosition>
              <IconPosition>
                <FavoriteSharpIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    padding: "1px",
                  }}
                />
              </IconPosition>
              <IconPosition>
                <BookmarkSharpIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    padding: "1px",
                  }}
                />
              </IconPosition>
              <IconPosition>
                <StarPurple500SharpIcon
                  sx={{
                    width: "60%",
                    height: "60%",
                    padding: "1px",
                  }}
                />
              </IconPosition>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic", color: COLORS.textColor, pt: "15px" }}
          >
            {movieDetail?.tagline}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: "20px", fontWeight: "600", p: "10px 0" }}
          >
            Overview
          </Typography>
          <Typography variant="body1">{movieDetail?.overview}</Typography>
        </Container>
      </Container>
      <Box>
        {movieReviews &&
          movieReviews?.map((movieReview) => (
            <ReviewCard review={movieReview} key={movieReview?.id} />
          ))}
      </Box>
    </Container>
  ) : (
    <Skeleton
      animation="wave"
      variant="rectangular"
      width="100%"
      height={200}
    />
  );
}

export default MovieDetail;
