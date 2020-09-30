import { switchMap } from 'rxjs/operators';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;
  movieForm: FormGroup;
  isUpdated: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.movieService.getMovie(params.get('id'))
      })
    ).subscribe((movie: Movie) => {
      this.movie = movie;
      this.movieForm = new FormGroup({
        title: new FormControl(movie.title, [
          Validators.required,
          Validators.minLength(2)
        ]),
        director: new FormControl(movie.director, Validators.required),
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const movie: Movie = {
      id: this.movie.id,
      ...this.movieForm.value
    };
    this.movieService.updateMovie(movie).subscribe(res => {
      this.isUpdated = true;
    });
  }

}
