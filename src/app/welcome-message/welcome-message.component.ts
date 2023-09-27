import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css'],
})
export class WelcomeMessageComponent {
  h2cContent = 'Dear Parents & Carers';
  p1Content = [
    ' Denbigh Primary School is an exciting and happy place to learn. We are dedicated to excellence in all that we do. Our dedication permeates our determination to provide our children with as many opportunities and experiences as possible.',
  ];
}
