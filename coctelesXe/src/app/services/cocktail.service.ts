import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  buscarPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${nombre}`);
  }

  obtenerPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  obtenerRandom(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random.php`);
  }
}
