import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_BASE_URL = 'http://localhost:3001/users';
  constructor(private http:HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(this.API_BASE_URL);
  }
}
