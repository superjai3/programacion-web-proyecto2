import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject } from '../modues/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<RootObject[]> {
    return this.http.get<RootObject[]>(this.apiUrl);
  }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === email);
        return user ? user.address.geo.lat === password : false;
      })
    );
  }
}
