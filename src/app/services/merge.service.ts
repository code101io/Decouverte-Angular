import { Director } from './../interfaces/director';
import { Movie } from './../interfaces/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeService {

  findDirectorByMovie(movies: Movie[], directors: Director[]): Movie[] {
    const moviesArr: Movie[] = [];
    movies.forEach((movie: Movie) => {
      const director: Director = directors.find((director: Director) => director.id === movie.director);

      moviesArr.push({
        ...movie,
        director: director.name
      });
    });
    return moviesArr;
  }

  findMoviesByDirector(movies: Movie[], directors: Director[]): Director[] {
    const directorMoviesArr: Director[] = [];
    directors.forEach((director: Director) => {
      const moviesArr: string[] = [];

      if (director.movies) {
        director.movies.forEach((movieID: string) => {
          const movie: Movie = movies.find((movie: Movie) => movie.id === movieID);
          moviesArr.push(movie.title);
        });
      }

      directorMoviesArr.push({
        ...director,
        movies: moviesArr
      });
    });
    return directorMoviesArr;
  }

}
