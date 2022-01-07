import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/enums/Page';
import { RecipesPageComponent } from 'src/app/components/recipes-page/recipes-page.component';
import { ShoppingPageComponent } from 'src/app/components/shopping-page/shopping-page.component';

const routes: Routes = [{
  path: Page.RECIPES,
  component: RecipesPageComponent
}, {
  path: Page.SHOPPING,
  component: ShoppingPageComponent
}, {
  path: "**",
  redirectTo: Page.RECIPES
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
