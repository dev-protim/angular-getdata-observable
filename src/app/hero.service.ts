import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { filter, find, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: any = "/assets/hero-list.json";  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET Heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroDetails(id: string) {

    // const url = `${this.heroesUrl}/${id}`;
    console.log(id, "id");
    return this.http.get<Hero>(this.heroesUrl).pipe(map((hero:any) => {
      return hero.find((data:any) => data.id == id);
    }));
  }



  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // private log(message: string) {
  //   // this.messageService.add(`HeroService: ${message}`);
  // }
}
