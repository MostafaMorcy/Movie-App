import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClint: HttpClient, private _Router: Router) {
    //  this. userDataShow()
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }
  userData: any = new BehaviorSubject(null);

  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: object = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);
  }

  register(userData: object): Observable<any> {
    return this._HttpClint.post(
      'https://sticky-note-fe.vercel.app/signup/',
      userData
    );
  }
  login(userData: object): Observable<any> {
    return this._HttpClint.post(
      'https://sticky-note-fe.vercel.app/signin/',
      userData
    );
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}

