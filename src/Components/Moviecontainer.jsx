import React from "react";
import { Container, Row } from "reactstrap";

import MovieList from "./MovieList/MovieList";
import AddNewMovie from "./AddNewMovie/AddNewMovie";
import SearchBar from "./SearchBar/SearchBar";
class Moviecontainer extends React.Component {
  state = {
    movies: [
      {
        title: "Toy story",
        pic:
          "http://fr.web.img4.acsta.net/c_215_290/pictures/19/06/12/17/42/4485647.jpg",
        rating: 2
      },
      {
        title: "Joker",
        pic:
          "https://i0.wp.com/alarencontreduseptiemeart.com/wp-content/uploads/2019/10/Joker.jpg?fit=945%2C496&ssl=1",
        rating: 3
      },
      {
        title: "Alita",
        pic:
          "http://fr.web.img2.acsta.net/c_215_290/pictures/18/12/20/17/14/4514778.jpg",
        rating: 3
      },
      {
        title: "Star Wars",
        pic: "http://fr.web.img6.acsta.net/pictures/19/10/22/10/17/3326733.jpg",
        rating: 4
      }
    ],
    searchInput: "",
    searchRate: 0
  };
  addNewMovie = newMovie =>
    this.setState({ ...this.state, movies: [...this.state.movies, newMovie] });

  changeSearchHandler = e => this.setState({ searchInput: e.target.value });
  rateSearchHandler = rate => this.setState({ searchRate: rate });
  render() {
    return (
      <Container>
        <Row>
          <SearchBar
            changeHandler={this.changeSearchHandler}
            rate={this.state.searchRate}
            rateChange={this.rateSearchHandler}
          />
        </Row>
        <Row>
          
          <MovieList
            movies={
              this.state.searchInput
                ? this.state.movies.filter(el =>
                    el.title
                      .toLowerCase()
                      .includes(this.state.searchInput.toLowerCase())
                  )
                : this.state.movies.filter(
                    el => el.rating >= this.state.searchRate
                  )
            }
          />
        </Row>
        <Row>
          <AddNewMovie addNewMovie={this.addNewMovie} />
        </Row>
      </Container>
    );
  }
}
export default Moviecontainer;
