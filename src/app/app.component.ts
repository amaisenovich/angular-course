import { Component, OnInit } from '@angular/core';
import { Page } from 'src/enums/Page';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Page = Page

  currentPage: Page | undefined = undefined

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.currentPage = this.navigationService.currentPage
    this.navigationService.onNavigation.subscribe((page: Page) => {
      this.currentPage = page
    })
  }
}
