import { TestBed } from '@angular/core/testing';
import { MergeService } from './merge.service';

const mockMovies = [
  {
    id: "1",
    title: "Interstellar",
    director: "1"
  },
  {
    id: "2",
    title: "Joker",
    director: "2"
  }
];

const mockDirectors = [
  {
    id: "1",
    name: "Christopher Nolan",
    movies: ["1", "2"]
  },
  {
    id: "2",
    name: "Todd Phillips",
    movies: ["2"]
  }
];

describe('MergeService', () => {
  let service: MergeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findDirectorByMovie', () => {
    const expected = service.findDirectorByMovie(mockMovies, mockDirectors);
    const result = [
      {
        id: "1",
        title: "Interstellar",
        director: "Christopher Nolan"
      },
      {
        id: "2",
        title: "Joker",
        director: "Todd Phillips"
      }
    ];
    expect(expected).toEqual(result);
  });

  it('findMoviesByDirector', () => {
    const expected = service.findMoviesByDirector(mockMovies, mockDirectors);
    const result = [
      {
        id: "1",
        name: "Christopher Nolan",
        movies: ["Interstellar", "Joker"]
      },
      {
        id: "2",
        name: "Todd Phillips",
        movies: ["Joker"]
      }
    ];
    expect(expected).toEqual(result);
  });
});
