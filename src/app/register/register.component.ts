import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userData = {
    email: '',
    username: '',
    password: '',
    isSocial: false,
  };
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (this._auth.loggedIn()) {
      this._auth.logoutUser();
      this._router.navigate(['/register']);
    }
  }

  registerUser(registerUserData: any) {
    this.userData.email = registerUserData.email;
    this.userData.username = registerUserData.username;
    this.userData.password = registerUserData.password;
    this.signup(this.userData);
  }

  signupWithGoogle() {
    this._socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        this.userData.email = data.email;
        this.userData.username = data.name;
        this.userData.password = data.id;
        this.userData.isSocial = true;
      })
      .then(() => {
        this.signup(this.userData);
      });
  }

  signupWithFacebook() {
    this._socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((data) => {
        this.userData.email = data.email;
        this.userData.username = data.name;
        this.userData.password = data.id;
        this.userData.isSocial = true;
      })
      .then(() => {
        this.signup(this.userData);
      });
  }

  signup(data: any) {
    this._auth.registerUser(data).subscribe(
      (res) => {
        let token = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token', token.token);
        this._router.navigate(['/profile']);
      },
      (err) => {
        if (err.error === 'Email already exists') {
          alert('Email already exists');
        } else {
          console.error(err);
        }
      }
    );
  }
}
