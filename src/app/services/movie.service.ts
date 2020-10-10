import { environment } from './../../environments/environment';
import { Movie } from './../interfaces/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = environment.apiUrl;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiUrl}/movies`);
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}/movies/${id}`);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(`${this.apiUrl}/movies`, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(`${this.apiUrl}/movies/${movie.id}`, movie);
  }

  deleteMovie(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/movies/${id}`);
  }
}
