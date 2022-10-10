import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Logo from "./../../assets/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { COLORS } from "./../../app.constant";

const pages = [
  {
    name: "Movies",
    link: "/movies",
    type: "movies",
    options: ["Popular", "Now Playing", "UpComing", "Top Rated"],
  },
  {
    name: "TV Shows",
    link: "/shows",
    type: "shows",
    options: ["Popular", "Airing Today", "On TV", "Top Rated"],
  },
  {
    name: "People",
    link: "/peoples",
    type: "peoples",
    options: ["Popular People"],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props) {
  const navigate = useNavigate();
  const { getMovies, getShows, getPeoples } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menu, setMenu] = React.useState({});

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (type, actionFor) => {
    setMenu({ anchor: null, options: null });
    switch (type) {
      case "peoples":
        getPeoples({
          type,
          page: 1,
          actionFor,
        });
        navigate("/peoples");
        return;
      default:
        console.log("show : ", type, actionFor);
        navigate(`/${type}`, { state: { actionFor: actionFor, type: type } });
        return;
    }
  };
  return (
    <AppBar position="static" sx={{ height: "64px" }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "1300px",
          padding: { sm: "0", md: "0 40px" },
          boxSizing: "border-box",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              alignContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.name}
                  onClick={() => handleClick(page.type)}
                >
                  <Typography textAlign="center">
                    <NavLink
                      className="link-style link-color-black"
                      to={page?.link}
                    >
                      {page?.name}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", mr: 3, cursor: "pointer" },
            }}
          >
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex", alignItems: "center" },
              marginRight: { sm: "4px", md: "24px" },
            }}
          >
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
            <Menu
              sx={{
                ml: { sx: "0px", sm: "20px" },
                mt: "45px",
                boxSizing: "border-box",
              }}
              id="menu-appbar"
              anchorEl={menu?.anchor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menu?.anchor)}
              onClick={() => setMenu({ anchor: null, options: null })}
            >
              {menu?.options?.map((opt, i) => (
                <MenuItem
                  key={opt}
                  onClick={() => handleClick(menu?.type, opt)}
                >
                  <Typography textAlign="center">{opt}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {pages.map((page, i) => (
              <Button
                key={page.name}
                name={page.name}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onMouseEnter={(e) => {
                  setMenu({
                    anchor: e.currentTarget,
                    options: page.options,
                    type: page.type,
                  });
                }}
                sx={{
                  p: 1,
                  mr: 2,
                  display: "block",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: COLORS.white,
                }}
              >
                {page?.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center" }}
          >
            <AddIcon
              sx={{
                display: { xs: "none", md: "flex" },
                color: COLORS.white,
                height: 30,
                width: 30,
                mr: 3,
              }}
            />
            <Typography
              sx={{
                display: { xs: "none", md: "flex" },
                border: 1,
                color: COLORS.white,
                p: "4px",
                borderRadius: 1,
                fontSize: "12px",
                fontWeight: "600",
                mr: 3,
              }}
            >
              EN
            </Typography>
            <NotificationsRoundedIcon
              sx={{
                display: { xs: "none", sm: "block" },
                color: COLORS.white,
                height: 22,
                width: 22,
                mr: 3,
              }}
            />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    bgcolor: COLORS.tmdbLightGreen,
                    height: 32,
                    width: 32,
                    fontSize: "13px",
                    fontWeight: "600",
                    mr: 3,
                  }}
                  alt="Remy Sharp"
                >
                  S
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <SearchIcon
              sx={{
                display: { xs: "none", sm: "block" },
                color: COLORS.tmdbLightBlue,
                height: 30,
                width: 30,
                mr: 3,
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
