import { Component } from '@angular/core';
import { Page } from 'src/app/enums/Page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Page = Page;

  collapsed = true;
}
