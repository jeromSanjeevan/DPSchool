import { Component } from '@angular/core';

@Component({
  selector: 'app-our-school',
  templateUrl: './our-school.component.html',
  styleUrls: ['./our-school.component.css']
})
export class OurSchoolComponent {
  ourSchoolSubMenus = [
    { label: 'Headteachers Welcome', url: '/headTeacherWelcome' },
    { label: 'Our Vision and Values', url: '/about' },
    { label: 'Virtual Tour', url: '/services' },
    { label: 'Our School Day', url: '/contact' },
    { label: 'Our Staff', url: '/contact' },
    { label: 'Our Governors', url: '/contact' },
  ];
}
