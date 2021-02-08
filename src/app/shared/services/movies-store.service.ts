import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { environment } from '@env';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesStoreService {

  private url = environment.OmdbURL;

  constructor(private http: HttpClient) {}

  private subject = new BehaviorSubject<Movie[]>([]);
  movies$: Observable<Movie[]>  = this.subject.asObservable();

  searchByTitle(movie:string, page:number):Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.url}${movie}&page=${page}`).pipe(
      map((result) => result['Search']),
      tap(peliculas => {
        return this.subject.next(peliculas)
          }
        )
    );
  }
}
