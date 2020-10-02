import { Director } from './../../../interfaces/director';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  @Input() model: Director;
  director: Director;
  constructor() { }

  ngOnInit(): void {
    this.director = this.model;
  }

}
