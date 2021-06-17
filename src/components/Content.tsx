import { MovieCard } from '../components/MovieCard';

import { MovieProps } from '../App';

interface ContentProps {
  selectedGenreTitle: string;
  movies: MovieProps[]
}

export function Content({selectedGenreTitle, movies}: ContentProps) {
  
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}