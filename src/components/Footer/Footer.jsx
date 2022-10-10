import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import footerLogo from "./../../assets/images/logo2.svg";
import { NavLink } from "react-router-dom";
import { COLORS } from "./../../app.constant";
import "./../../index.css";

function Footer() {
  return (
    <Box sx={{ background: COLORS.tmdbDarkBlue }}>
      <Container
        sx={{
          display: { md: "flex", sm: "block" },
          textAlign: { xs: "center", sm: "center" },
          color: COLORS.white,
          padding: "80px 0",
        }}
        maxWidth="md"
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Box sx={{ width: "130px", height: "94px" }}>
            <img src={footerLogo} about="alt" />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              p: "5px 15px",
              borderRadius: "3px",
              fontWeight: "600",
              color: COLORS.tmdbLightBlue,
              bgcolor: COLORS.white,
            }}
          >
            Hi Shoaib Ashiq!
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              fontWeight: "600",
            }}
          >
            THE BASICS
          </Typography>

          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              About TMDB
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Contact Us
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Support Forums
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              API
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              System Status
            </Box>
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              fontWeight: "600",
            }}
          >
            GET INVOLVED
          </Typography>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Contribution Bible
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Add New Movie
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Add New TV Show
            </Box>
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              fontWeight: "600",
            }}
          >
            COMMUNITY
          </Typography>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Guidelines
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Discussions
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Leaderboard
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Twitter
            </Box>
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{
              mt: "20px",
              fontWeight: "600",
            }}
          >
            LEGAL
          </Typography>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Terms of Use
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              API Terms of Use
            </Box>
          </NavLink>
          <NavLink className="link-style" to="/">
            <Box
              sx={{
                color: COLORS.white,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Privacy Policy
            </Box>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
