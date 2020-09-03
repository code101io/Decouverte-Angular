import { Movie } from './../interfaces/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

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
