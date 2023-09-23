import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ourSchoolSubMenus = [
    { label: 'Headteachers Welcome', url: '/home' },
    { label: 'Our Vision and Values', url: '/about' },
    { label: 'Virtual Tour', url: '/services' },
    { label: 'Our School Day', url: '/contact' },
    { label: 'Our Staff', url: '/contact' },
    { label: 'Our Governors', url: '/contact' },
  ];

  admissionsSubMenus = [
    { label: 'Starting School ', url: '/home' },
    { label: 'High School Transistion', url: '/about' },
  ];

  keyInformationSubMenus = [
    { label: 'Pupil Premium', url: '/home' },
    { label: 'Sports Premium', url: '/about' },
    { label: 'GDPR', url: '/services' },
    { label: 'Performance Data', url: '/contact' },
    { label: 'Inspection Outcomes', url: '/contact' },
    { label: 'Financial Benchmarking', url: '/contact' },
  ];

  ngOnInit(): void {}
}
