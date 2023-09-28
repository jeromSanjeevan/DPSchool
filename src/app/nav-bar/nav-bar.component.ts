import { Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  // Image URLs for Navbar

  navBarLogo: string = '../../assets/denbigh_logo/den_logo.png'


  ourSchoolSubMenus = [
    { label: 'Headteachers Welcome', url: '/headTeacherWelcome' },
    { label: 'Our Vision and Values', url: '/about' },
    { label: 'Virtual Tour', url: '/services' },
    { label: 'Our School Day', url: '/contact' },
    { label: 'Our Staff', url: '/contact' },
    { label: 'Our Governors', url: '/contact' },
  ];

  admissionsSubMenus = [
    { label: 'Starting School ', url: '/home' },
    { label: 'High School Transistion', url: '/about' },
    { label: 'High School Transistion', url: '/about' },
  ];

  keyInformationSubMenus = [
    { label: 'Pupil Premium', url: '' },
    { label: 'Sports Premium', url: '/about' },
    { label: 'GDPR', url: '/services' },
    { label: 'Performance Data', url: '/contact' },
    { label: 'Inspection Outcomes', url: '/contact' },
    { label: 'Financial Benchmarking', url: '/contact' },
  ];
  constructor() {}



  closeMobileMenu() {
    // Close the mobile menu by toggling the collapse button if it is open
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (
      navbarToggler &&
      navbarCollapse &&
      navbarCollapse.classList.contains('show')
    ) {
      navbarToggler.dispatchEvent(new Event('click'));
    }
  }

  scrollToTop(): void {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // changeCSS() {
  //   // Get the element you want to change the CSS of
  //   const element = this.el.nativeElement.querySelector('.dropdown .dropdown-menu');

  //   // Modify the CSS properties
  //   // this.renderer.setStyle(element, 'background-color', 'blue');
  //   this.renderer.setStyle(element, 'display', 'none');

  //   setTimeout(() => {
  //     // this.renderer.removeStyle(element, 'background-color');
  //     // this.renderer.removeStyle(element, 'color');
  //    this.renderer.setStyle(element, 'display', 'none');
  //     // Add any other property removals here
  //   }, 2000); // 2000 milliseconds or 2 seconds
  // }
}
