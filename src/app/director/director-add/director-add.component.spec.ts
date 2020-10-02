import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAddComponent } from './director-add.component';

describe('DirectorAddComponent', () => {
  let component: DirectorAddComponent;
  let fixture: ComponentFixture<DirectorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
