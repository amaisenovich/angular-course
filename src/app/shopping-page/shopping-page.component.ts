import { Component } from '@angular/core';
import { SelectionService } from 'src/services/selection.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css'],
  providers: [SelectionService]
})
export class ShoppingPageComponent {
}
