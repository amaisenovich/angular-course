import { Component } from '@angular/core';
import { Page } from 'src/enums/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Page = Page

  currentPage = Page.RECIPES

  onNavigation = (page: Page) => {
    this.currentPage = page
  } 
}
