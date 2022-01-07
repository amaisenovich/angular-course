import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { RootComponent } from 'src/app/components/root.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { ShoppingPageComponent } from 'src/app/components/shopping-page/shopping-page.component';
import { ShoppingListComponent } from 'src/app/components/shopping-page/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from 'src/app/components/shopping-page/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from 'src/app/components/shopping-page/shopping-list-edit/shopping-list-edit.component';

import { RecipesPageComponent } from 'src/app/components/recipes-page/recipes-page.component';
import { RecipeListComponent } from 'src/app/components/recipes-page/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from 'src/app/components/recipes-page/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailsComponent } from 'src/app/components/recipes-page/recipe-details/recipe-details.component';
import { RecipeListCommandsComponent } from 'src/app/components/recipes-page/recipe-list/recipe-list-commands/recipe-list-commands.component';
import { RecipeDetailsCommandsComponent } from 'src/app/components/recipes-page/recipe-details/recipe-details-commands/recipe-details-commands.component';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import { RecipeEditComponent } from './components/recipes-page/recipe-edit/recipe-edit.component';
import { RecipeDetailsPlaceholderComponent } from './components/recipes-page/recipe-details-placeholder/recipe-details-placeholder.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    ShoppingPageComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListEditComponent,
    RecipesPageComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailsComponent,
    RecipeListCommandsComponent,
    RecipeDetailsCommandsComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeDetailsPlaceholderComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
