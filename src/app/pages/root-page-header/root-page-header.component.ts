import { Component } from '@angular/core';
import { Page } from 'src/app/common/enums/Page';

@Component({
  selector: 'app-header',
  templateUrl: './root-page-header.component.html',
  styleUrls: ['./root-page-header.component.css']
})
export class RootPageHeaderComponent {
  Page = Page;

  collapsed = true;
}
