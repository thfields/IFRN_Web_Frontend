import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from './login-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Observable<any> {
    const URL = 'http://localhost:3000/login';
    return this.http.post(URL, user);
  }
}
 