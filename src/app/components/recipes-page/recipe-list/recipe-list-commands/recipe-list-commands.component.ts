import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/enums/Page';

@Component({
  selector: 'app-recipe-list-commands',
  templateUrl: './recipe-list-commands.component.html',
  styleUrls: ['./recipe-list-commands.component.css']
})
export class RecipeListCommandsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  onNewClick = () => {
    this.router.navigate(
      [Page.NEW],
      { relativeTo: this.route }
    )
  }
}
