import { DirectorService } from './../../services/director.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Director } from './../../interfaces/director';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.scss']
})
export class DirectorEditComponent implements OnInit {

  director: Director;
  directorForm: FormGroup;
  isUpdated: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly directorService: DirectorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.directorService.getDirector(params.get('id'))
      })
    ).subscribe((director: Director) => {
      this.director = director;
      this.directorForm = new FormGroup({
        name: new FormControl(director.name, [
          Validators.required,
          Validators.minLength(2)
        ])
      });
    });
  }

  onSubmit(): void {
    const director: Director = {
      id: this.director.id,
      ...this.directorForm.value
    };
    this.directorService.updateDirector(director).subscribe(res => {
      this.isUpdated = true;
    });
  }

}
