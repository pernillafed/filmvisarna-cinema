import styles from '../css/MovieList.module.css';
import FeaturedMovie from '../components/FeaturedMovie';

function MovieList() {
    return (
        <div className="container">
            <div className="header">
                <h2 className={styles.heading}>I fokus</h2>
                <FeaturedMovie />
            </div>
            <div className="movie-list">
                <h2 className={styles.heading}>Alla filmer</h2>
                <div className={styles.filterLine}>
                    <h3>På bio nu</h3>
                    <a href="#">Visa filter</a>
                </div>
                {/* MovieList component here */}
            </div>
        </div>
    )
}

export default MovieList;