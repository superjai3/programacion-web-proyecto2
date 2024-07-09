import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../modues/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private apiUrl = 'https://api.genderize.io';

  constructor(private http: HttpClient) { }

  getGenero(name: string): Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}?name=${name}`);
  }
}
