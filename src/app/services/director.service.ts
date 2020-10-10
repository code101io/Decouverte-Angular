import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Director } from './../interfaces/director';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  apiUrl = environment.apiUrl;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getDirectors(): Observable<Director[]> {
    return this.httpClient.get<Director[]>(`${this.apiUrl}/directors`);
  }

  getDirector(id: string): Observable<Director> {
    return this.httpClient.get<Director>(`${this.apiUrl}/directors/${id}`);
  }

  createDirector(director: Director): Observable<Director> {
    return this.httpClient.post<Director>(`${this.apiUrl}/directors`, director);
  }

  updateDirector(director: Director): Observable<Director> {
    return this.httpClient.put<Director>(`${this.apiUrl}/directors/${director.id}`, director);
  }

  deleteDirector(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/directors/${id}`);
  }
}
