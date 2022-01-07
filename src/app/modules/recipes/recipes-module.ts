import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from 'src/app/common/common.module';

import { RecipesPageComponent } from './pages/recipes-page.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './pages/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeListCommandsComponent } from './pages/recipe-list/recipe-list-commands/recipe-list-commands.component';
import { RecipeDetailsCommandsComponent } from './pages/recipe-details/recipe-details-commands/recipe-details-commands.component';
import { RecipeEditComponent } from './pages/recipe-edit/recipe-edit.component';
import { RecipePlaceholderComponent } from './pages/recipe-placeholder/recipe-placeholder.component';
import { RecipiesRoutingModule } from './recipies-routing.module';

@NgModule({
  declarations: [
    RecipesPageComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailsComponent,
    RecipeListCommandsComponent,
    RecipeDetailsCommandsComponent,
    RecipeEditComponent,
    RecipePlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RecipiesRoutingModule
  ],
  exports: [
    RecipesPageComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailsComponent,
    RecipeListCommandsComponent,
    RecipeDetailsCommandsComponent,
    RecipeEditComponent,
    RecipePlaceholderComponent
  ]
})
export class RecipesModule {
}
