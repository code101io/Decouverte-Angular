import { Movie } from './../interfaces/movie';
import { Injectable } from '@angular/core';

const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    id: '2',
    title: 'Joker',
    director: 'Todd Phillips'
  },
  {
    id: '3',
    title: 'Black Panther',
    director: 'Ryan Coogler'
  },
  {
    id: '4',
    title: 'Inception',
    director: 'Christopher Nolan'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovie(id: string): Movie {
    return MOVIES.find((movie: Movie) => movie.id === id);
  }
}
