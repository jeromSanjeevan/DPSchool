import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroCarousel') heroCarousel: any;

  ngAfterViewInit(): void {
    // Initialize the carousel once the view is ready
    this.heroCarousel.nativeElement.carousel();
  }
}
