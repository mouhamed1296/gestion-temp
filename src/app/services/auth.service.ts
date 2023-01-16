import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_BASE_URL = 'http://localhost:3001/auth';
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    if (!credentials.role) {
      credentials.role = 'admin';
    }
    return this.http.post(this.API_BASE_URL + '/login', credentials);
  }

}
