import { Footer, NotFound } from "./components";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/Home.container";
import SearchResultContainer from "./pages/SearchResult/searchDetail.container";
import NavbarContainer from "./components/Navbar/Navbar.container";
import MovieContainer from "./pages/Movie/Movie.container";
import ShowContainer from "./pages/Show/show.container";
import PeopleContainer from "./pages/People/people.container";
import MovieDetailContainer from "./pages/MovieDetail/movieDetail.container";
import ShowDetailContainer from "./pages/ShowDetail/showDetail.container";
import PeopleDetailContainer from "./pages/PeopleDetail/peopleDetail.container";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavbarContainer />
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/movies" element={<MovieContainer />}></Route>
            <Route path="/shows" element={<ShowContainer />}></Route>
            <Route path="/peoples" element={<PeopleContainer />}></Route>
            <Route
              path="/movies/:id"
              element={<MovieDetailContainer />}
            ></Route>
            <Route path="/shows/:id" element={<ShowDetailContainer />}></Route>
            <Route
              path="/peoples/:id"
              element={<PeopleDetailContainer />}
            ></Route>
            <Route path="/search" element={<SearchResultContainer />}></Route>
            <Route path="*" element={<NotFound state="Page Not found" />} />
          </Routes>
        </Container>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
