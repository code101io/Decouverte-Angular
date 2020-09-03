import { Movie } from './../../../interfaces/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() model: Movie;
  @Output() delete: EventEmitter<Movie> = new EventEmitter();
  movie: Movie;

  constructor() { }

  ngOnInit(): void {
    this.movie = this.model;
  }

  onClick(): void {
    this.delete.emit(this.movie);
  }

}
