import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-head-teacher-welcome',
  templateUrl: './head-teacher-welcome.component.html',
  styleUrls: ['./head-teacher-welcome.component.css']
})
export class HeadTeacherWelcomeComponent {
  // htmlContent: SafeHtml | undefined;
  // fileUrl: string = 'assets/test.html'; // Path to your HTML file

  // constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  // loadHtmlContent() {
  //   this.http.get(this.fileUrl, { responseType: 'text' }).subscribe(
  //     (data) => {
  //       this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //     },
  //     (error) => {
  //       console.error('Error loading HTML file:', error);
  //     }
  //   );
  // }
}
