import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user = {
    email: '',
    username: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._auth.getProfile().subscribe(
      (res) => {
        this.user.email = JSON.parse(JSON.stringify(res)).email;
        this.user.username = JSON.parse(JSON.stringify(res)).username;
      },
      (err) => console.error(err)
    );
  }

  editUser(editUserData: any) {
    this._auth.editUser(editUserData).subscribe(
      (res) => {
        console.log(res);
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
