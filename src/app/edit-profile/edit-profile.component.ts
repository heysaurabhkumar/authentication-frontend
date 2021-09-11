import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  display: boolean = false;
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._auth.getProfile().subscribe(
      (res) => {
        this.user.patchValue({
          email: JSON.parse(JSON.stringify(res)).email,
          username: JSON.parse(JSON.stringify(res)).username,
        });
      },
      (err) => console.error(err)
    );
  }

  editUser() {
    this._auth.editUser(this.user.value).subscribe(
      (res) => {
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
