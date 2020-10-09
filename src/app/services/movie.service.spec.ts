import { Movie } from './../interfaces/movie';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let httpTestingController: HttpTestingController
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MovieService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createMovie', () => {
    const mockMovie: Movie = {
      id: "1",
      title: "Movie title",
      director: ""
    };

    service.createMovie(mockMovie).subscribe((data) => {
      expect(data.title).toEqual('Movie title');
    });

    const req = httpTestingController.expectOne('/api/movies');

    expect(req.request.method).toEqual('POST');
    req.flush(mockMovie);
  });

  it('getMovie', () => {
    const mockMovie: Movie = {
      id: "1",
      title: "Movie title",
      director: ""
    };

    service.getMovie("1").subscribe((data) => {
      expect(data.title).toEqual('Movie title');
    });

    const req = httpTestingController.expectOne('/api/movies/1');

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovie);
  });

  it('getMovies', () => {
    const mockMovies: Movie[] = [
      {
        id: "1",
        title: "Movie title",
        director: "1"
      },
      {
        id: "2",
        title: "Movie title 2",
        director: "2"
      }
    ];

    service.getMovies().subscribe((data) => {
      expect(data[0].title).toEqual('Movie title');
      expect(data[0].director).toEqual('1');
      expect(data[1].title).toEqual('Movie title 2');
      expect(data[1].director).toEqual('2');
    });

    const req = httpTestingController.expectOne('/api/movies');

    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });
});
