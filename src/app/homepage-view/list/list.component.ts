import { DirectorService } from './../../services/director.service';
import { Director } from './../../interfaces/director';
import { Movie } from './../../interfaces/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: Movie[];
  directors: Director[];

  constructor(
    private readonly movieService: MovieService,
    private readonly directorService: DirectorService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });

    this.directorService.getDirectors().subscribe((directors: Director[]) => {
      this.directors = directors;
    });
  }

  deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie.id).subscribe(() => {
      console.log('DELETE');
    });
  }

}
