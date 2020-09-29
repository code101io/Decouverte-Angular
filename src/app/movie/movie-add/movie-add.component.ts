import { Movie } from './../../interfaces/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  title: string;
  director: string;
  isCreated = false;

  constructor(
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const movie: Movie = {
      title: this.title,
      director: this.director
    };

    this.movieService
      .createMovie(movie)
      .subscribe(() => {
        this.isCreated = true;
        this.title = null;
        this.director = null;
      });
  }

}
