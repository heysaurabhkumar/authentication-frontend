import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  editUserData = {
    email: '',
    username: '',
    password: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  editUser() {
    this._auth.editUser(this.editUserData).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['/profile']);
      },
      (err) => console.log(err)
    );
  }
}
