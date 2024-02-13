import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Localstorage_keysEnum } from './localstorage_keys.enum';
interface User {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public async login(
    username: string,
    password: string
  ): Promise<User | undefined> {
    try {
      const res = await this.http
        .post<User>('http://localhost:3000/api/auth/login', {
          username,
          password,
        })
        .toPromise();

      this.setSession(res);
      return res;
    } catch (e) {
      throw e; // rethrow the error for handling in the component if needed
    }
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
