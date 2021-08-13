import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/profile']);
    }
  }

  loginUser(loginUserData: any) {
    this._auth.loginUser(loginUserData).subscribe(
      (res) => {
        let token = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token', token.token);
        this._router.navigate(['/profile']);
      },
      (err) => console.log(err)
    );
  }
}
