import { Component } from '@angular/core';
import { Page } from 'src/enums/Page';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Page = Page;

  collapsed = true;

  constructor(private navigationService: NavigationService) {
  }

  navigate = this.navigationService.navigate
}
