import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  socialData = {
    email: '',
    username: '',
    password: '',
  };
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/profile']);
    }
  }

  loginUser(loginUserData: any) {
    this.login(loginUserData);
  }

  loginWithGoogle() {
    this._socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        this.socialData.email = data.email;
        this.socialData.username = data.name;
        this.socialData.password = data.id;
      })
      .then(() => {
        this.login(this.socialData);
      });
  }

  login(data: any) {
    this._auth.loginUser(data).subscribe(
      (res) => {
        let token = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token', token.token);
        this._router.navigate(['/profile']);
      },
      (err) => {
        if (err.error === 'Invalid email') {
          alert('User not exists');
        } else if (err.error === 'Invalid password') {
          alert('Password Incorrect');
        } else {
          console.error(err);
        }
      }
    );
  }
}
