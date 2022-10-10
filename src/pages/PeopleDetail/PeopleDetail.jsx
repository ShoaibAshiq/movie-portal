import { CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function PeopleDetail(props) {
  const { peopleDetail, getPeopleDetails } = props;
  const { id } = useParams();

  useEffect(() => {
    getPeopleDetails({
      people_id: id,
      type: "peoples",
      actionFor: "People Details",
    });
  }, []);

  return (
    <Container maxWidth={false}>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          padding: "50px 10px 0px 40px",
        }}
      >
        <CardMedia
          sx={{
            maxWidth: "300px",
            maxHeight: "450px",
            borderRadius: "4px",
            margin: { xs: "0px 16px", sm: "0px 24px", md: "0px 24px" },
          }}
          component="img"
          image={`${process.env.REACT_APP_IMG_URL}${peopleDetail?.profile_path}`}
          onError={(e) => {
            e.target.src =
              "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
          }}
          alt="green iguana"
        />
        <Container>
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
              sx={{ fontSize: { xs: "18px", sm: "26px", md: "32px" } }}
            >
              {peopleDetail?.name}
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "20px", fontWeight: "500", p: "30px 0px 20px 0px" }}
          >
            Biography
          </Typography>
          <Typography variant="body1">{peopleDetail?.biography}</Typography>
        </Container>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          margin: "0px 24px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "20px", fontWeight: "700", pt: "30px" }}
        >
          Personal Info
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            pt: "20px",
          }}
        >
          <Box sx={{ pb: "10px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                width: "max-content",
              }}
            >
              Known For
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "max-content" }}>
              {peopleDetail?.known_for_department}
            </Typography>
          </Box>
          <Box sx={{ pb: "10px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                width: "max-content",
              }}
            >
              Gender
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "max-content" }}>
              {peopleDetail?.gender == 1 ? "Female" : "Male"}
            </Typography>
          </Box>
          <Box sx={{ pb: "10px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                width: "max-content",
              }}
            >
              Birthday
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "max-content" }}>
              {peopleDetail?.birthday}
            </Typography>
          </Box>
          <Box sx={{ pb: "10px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                width: "max-content",
              }}
            >
              Place of Birth
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "max-content" }}>
              {peopleDetail?.place_of_birth}
            </Typography>
          </Box>
          <Box sx={{ pb: "10px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                width: "max-content",
              }}
            >
              Also Known As
            </Typography>
            {peopleDetail?.also_known_as?.map((known) => (
              <Typography
                sx={{ fontSize: "16px", width: "max-content" }}
                key={known}
              >
                {known}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default PeopleDetail;
