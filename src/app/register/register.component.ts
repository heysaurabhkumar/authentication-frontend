import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        // console.log(res);
        let token = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token', token.token);
        this._router.navigate(['/profile']);
      },
      (err) => console.log(err)
    );
  }
}
