import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.apiUrl);
  }

  getMultipleUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?results=8`);
  }
}
