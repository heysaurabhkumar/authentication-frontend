import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _profileUrl = 'http://localhost:3000/api/profile';
  private _editUrl = 'http://localhost:3000/api/edit';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user: any) {
    return this.http.post(this._registerUrl, user);
  }

  editUser(user: any) {
    return this.http.post(this._editUrl, user);
  }

  loginUser(user: any) {
    return this.http.post(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getProfile() {
    return this.http.get(this._profileUrl);
  }
}
