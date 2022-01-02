import { Component, EventEmitter, Output } from '@angular/core';
import { Page } from 'src/enums/Page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  navigation = new EventEmitter<Page>()

  Page = Page;

  collapsed = true;

  navigate = (page: Page) => {
    this.navigation.emit(page)
  }
}
