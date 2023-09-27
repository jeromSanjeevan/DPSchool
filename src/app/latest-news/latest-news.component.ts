import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  latestNews: any[] | undefined;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.latestNews = this.newsService.getLatestNews();
  }
  stNews = this.newsService.getLatestNews();
}
