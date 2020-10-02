import { DirectorService } from './../../services/director.service';
import { Director } from './../../interfaces/director';
import { Movie } from './../../interfaces/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director-add',
  templateUrl: './director-add.component.html',
  styleUrls: ['./director-add.component.scss']
})
export class DirectorAddComponent implements OnInit {

  name: string;
  movies: Movie[];
  isCreated = false;

  constructor(
    private readonly directorService: DirectorService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const director: Director = {
      name: this.name,
      movies: []
    };

    this.directorService
      .createDirector(director)
      .subscribe(() => {
        this.isCreated = true;
        this.name = null;
      });
  }

}
