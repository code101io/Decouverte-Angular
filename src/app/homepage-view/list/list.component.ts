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

  constructor(
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

}
