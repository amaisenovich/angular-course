import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-page/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './shopping-page/shopping-list/shopping-list-edit/shopping-list-edit.component';

import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeListComponent } from './recipes-page/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipes-page/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailsComponent } from './recipes-page/recipe-details/recipe-details.component';
import { RecipeListCommandsComponent } from './recipes-page/recipe-list/recipe-list-commands/recipe-list-commands.component';
import { RecipeDetailsCommandsComponent } from './recipes-page/recipe-details/recipe-details-commands/recipe-details-commands.component';


@NgModule({
  declarations: [
    AppComponent,
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
    RecipeDetailsCommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
