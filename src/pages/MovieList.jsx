function MovieList() {
    return (
        <div className="container">
            <div className="header">
                <h2>I fokus</h2>
            </div>
            <div className="movie-list">
                <h2>Alla filmer</h2>
                <div className="filter-line">
                    <h3>På bio nu</h3>
                    <a href="#">Visa filter</a>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default MovieList;