import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nacionalidad } from '../modues/nacionalidad';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {
  private apiUrl = 'https://api.nationalize.io';

  constructor(private http: HttpClient) { }

  getNacionalidad(name: string): Observable<Nacionalidad> {
    return this.http.get<Nacionalidad>(`${this.apiUrl}?name=${name}`);
  }
}
