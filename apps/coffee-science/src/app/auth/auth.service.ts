import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, shareReplay, tap } from 'rxjs';
import { Localstorage_keysEnum } from './localstorage_keys.enum';
interface User {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<User> {
    return this.http
      .post<User>('http://localhost:3000/api/auth/login', {
        username,
        password,
      })
      .pipe(
        tap({
          next: (res) => {
            this.setSession(res);
            shareReplay();
          },
          error: (e) => {
            alert(`${e.status} ${e.statusText}`);
          },
        })
      );
  }

  private setSession(authResult: any) {
    const expireAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem(Localstorage_keysEnum.id_token, authResult.token);
    localStorage.setItem(
      Localstorage_keysEnum.expires_at,
      JSON.stringify(expireAt.valueOf())
    );
  }

  public logout() {
    localStorage.removeItem(Localstorage_keysEnum.id_token);
    localStorage.removeItem(Localstorage_keysEnum.expires_at);
  }
}
