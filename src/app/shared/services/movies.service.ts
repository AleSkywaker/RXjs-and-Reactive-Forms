import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = 'http://www.omdbapi.com/?apikey=69db5995&s=';
  constructor(private http: HttpClient) {}

  getMovies(peli: string, page: number): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`${this.url}${peli}&page=${page}`)
      .pipe(map((d) => d['Search']));
  }
}
