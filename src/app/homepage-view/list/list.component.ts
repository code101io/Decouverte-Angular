import { MergeService } from './../../services/merge.service';
import { DirectorService } from './../../services/director.service';
import { Director } from './../../interfaces/director';
import { Movie } from './../../interfaces/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

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
    private readonly directorService: DirectorService,
    private readonly mergeService: MergeService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.movieService.getMovies(),
      this.directorService.getDirectors()
    ]).subscribe(([movies, directors]: [Movie[], Director[]]) => {
      this.movies = this.mergeService.findDirectorByMovie(movies, directors);
      this.directors = this.mergeService.findMoviesByDirector(movies, directors);
    });
  }

  deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie.id).subscribe(() => {
      console.log('DELETE');
    });
  }

}
