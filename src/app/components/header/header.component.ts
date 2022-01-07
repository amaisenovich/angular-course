import { Component } from '@angular/core';
import { Page } from 'src/app/enums/Page';
import { NavigationService } from 'src/app/services/navigation.service';

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
