import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  getLatestNews() {
    return [
      {
        title: 'News 1',
        content: 'Lorem ipsum dolor sit amet.',
        imageUrl: '../assets/latest-news-image/1.jpg', // Example image URL, replace with your image URLs
      },
      {
        title: 'News 2',
        content: 'Consectetur adipiscing elit.',
        imageUrl: '../assets/latest-news-image/1.jpg', // Example image URL, replace with your image URLs
      },
      {
        title: 'News 3',
        content: 'Sed do eiusmod tempor incididunt.',
        imageUrl: '../assets/latest-news-image/1.jpg', // Example image URL, replace with your image URLs
      },
      {
        title: 'News 3',
        content: 'Sed do eiusmod tempor incididunt.',
        imageUrl: '../assets/latest-news-image/1.jpg', // Example image URL, replace with your image URLs
      },
      // Add more news items with imageUrl as needed
    ];
  }
}
