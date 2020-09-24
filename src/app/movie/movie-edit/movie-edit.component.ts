import { switchMap } from 'rxjs/operators';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.movieService.getMovie(params.get('id'))
      })
    ).subscribe((movie: Movie) => this.movie = movie);
  }

  ngOnInit(): void {
  }

}
