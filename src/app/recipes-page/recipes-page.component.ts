import { Component } from '@angular/core';
import { SelectionService } from 'src/services/selection.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
  providers: [SelectionService]
})
export class RecipesPageComponent {
}
