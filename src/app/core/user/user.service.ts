import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { TokenService } from './../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  //private userSubject = new BehaviorSubject<User>({id: 0, name: '', email: ''});
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private userName = '';

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
   }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    if (token){
      const user = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }
    else {
      console.log('erro: token nulo');
    }
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }
}
