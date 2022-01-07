import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/enums/Page';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
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
