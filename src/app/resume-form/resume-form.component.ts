import { Router } from '@angular/router';
import { ResumeService } from './../resume.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent implements OnInit {
  resumeForm = new FormGroup({
    fullname: new FormControl(''),
    position: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    skills: new FormControl(''),
    profile: new FormControl(''),
    linkedin: new FormControl(''),
    facebook: new FormControl(''),
    instagram: new FormControl(''),
    languages: new FormControl(''),
    objective: new FormControl(''),
    experience: new FormControl(''),
    project: new FormControl(''),
    certification: new FormControl(''),
    education: new FormControl(''),
  });

  constructor(private _resumeService: ResumeService, private _router: Router) {}

  ngOnInit(): void {
    this._resumeService.getResumeData().subscribe(
      (res) => {
        // console.log(JSON.parse(JSON.stringify(res)).fullname);
        this.resumeForm.setValue({
          fullname: JSON.parse(JSON.stringify(res)).fullname,
          position: JSON.parse(JSON.stringify(res)).position,
          email: JSON.parse(JSON.stringify(res)).email,
          mobile: JSON.parse(JSON.stringify(res)).mobile,
          address: JSON.parse(JSON.stringify(res)).address,
          skills: JSON.parse(JSON.stringify(res)).skills,
          profile: JSON.parse(JSON.stringify(res)).profile,
          linkedin: JSON.parse(JSON.stringify(res)).linkedin,
          facebook: JSON.parse(JSON.stringify(res)).facebook,
          instagram: JSON.parse(JSON.stringify(res)).instagram,
          languages: JSON.parse(JSON.stringify(res)).languages,
          objective: JSON.parse(JSON.stringify(res)).objective,
          experience: JSON.parse(JSON.stringify(res)).experience,
          project: JSON.parse(JSON.stringify(res)).project,
          certification: JSON.parse(JSON.stringify(res)).certification,
          education: JSON.parse(JSON.stringify(res)).education,
        });
      },
      (err) => console.error(err)
    );
  }

  generateResume() {
    // console.log(this.resumeForm.value);
    this._resumeService.setResumeData(this.resumeForm.value).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['/template']);
      },
      (err) => console.error(err)
    );
  }
}
