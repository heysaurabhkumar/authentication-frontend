import { ResumeService } from './../resume.service';
import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css'],
})
export class ResumeTemplateComponent implements OnInit {
  resumeData: any;
  constructor(private _resumeService: ResumeService) {}

  ngOnInit(): void {
    this._resumeService.getResumeData().subscribe(
      (res) => {
        // console.log('hello');

        // console.log(res);
        this.resumeData = res;
        this.resumeData.skills = this.resumeData.skills.split(',');
        this.resumeData.languages = this.resumeData.languages.split(',');
        this.resumeData.experience = this.resumeData.experience.split('|');
        this.resumeData.project = this.resumeData.project.split('|');
        this.resumeData.certification =
          this.resumeData.certification.split('|');
        this.resumeData.education = this.resumeData.education.split('|');
      },
      (err) => console.error(err)
    );

    // this.resumeData = this._resumeService.getResumeData();

    // console.log(this.resumeData);
  }

  download() {
    const resume: any = document.querySelector('#resume');
    html2canvas(resume, { allowTaint: true, useCORS: true }).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgHeight = (canvas.height * 208) / canvas.width;
      pdf.addImage(img, 0, 0, 208, imgHeight);
      pdf.save('Resume.pdf');
    });
  }
}
