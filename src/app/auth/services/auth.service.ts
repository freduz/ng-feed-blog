import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';
import { ILoginRequest } from '../types/loginRequest.interface';
import { IRegisterRequest } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    return this.http.post<IAuthResponse>(`${this.url}/users`, data).pipe(
      map((res: IAuthResponse) => {
        return res.user;
      })
    );
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    return this.http.post<IAuthResponse>(`${this.url}/users/login`, data).pipe(
      map((res: IAuthResponse) => {
        return res.user;
      })
    );
  }

  getCurrentUser(): Observable<ICurrentUser> {
    return this.http.get<IAuthResponse>(`${this.url}/user`).pipe(
      map((response: IAuthResponse) => {
        return response.user;
      })
    );
  }
}
