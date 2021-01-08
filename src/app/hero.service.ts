import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from './hero';
import { MessageService } from './message-service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes() : Observable<Hero[]>{
    return this.http.get<any>(`${environment.API_URL}/api/heroes`);
  }

  getHero(id: number) : Observable<Hero>{
    return this.http.get<any>(`${environment.API_URL}/api/heroes/${id}`);
  }

  saveHero(hero: Hero): Observable<any>{
    return this.http.post<Hero>(`${environment.API_URL}/api/heroes`, hero);
  }

  updateHero(hero: Hero) : Observable<any>{
    return this.http.put<any>(`${environment.API_URL}/api/heroes/${hero.id}`, hero);
  }

}
