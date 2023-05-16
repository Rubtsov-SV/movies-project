import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.checkBlock = React.createRef();
        this.blockGetCheck = this.blockGetCheck.bind(this);
    }

    state = {
        search: "",
        type: "all",
    };

    blockGetCheck() {
        this.checkBlock.current.classList.add("active");
    }

    headleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
            this.blockGetCheck();
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="search"
                            type="search"
                            id="email"
                            className="validate"
                            value={this.state.search}
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                            onKeyDown={this.headleKey}
                        />
                    </div>
                    <button
                        className="btn search-btn"
                        onClick={() => {
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            );
                            this.blockGetCheck();
                        }}
                    >
                        Search
                    </button>
                </div>
                <div
                    className="check"
                    ref={this.checkBlock}
                >
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
