import { Movies } from "../component/Movies.jsx";
import { Preloader } from "../component/Preloader.jsx";
import { Search } from "../component/Search.jsx";
import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        totalResults: 0,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=hulk`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data.Search, loading: false });
                console.log(data);
            });
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    movies: data.Search,
                    loading: false,
                    totalResults: data.totalResults,
                })
            );
    };

    render() {
        const { movies, loading, totalResults } = this.state;

        return (
            <main className="container content">
                <Search
                    searchMovies={this.searchMovies}
                    totalResults={totalResults}
                />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
