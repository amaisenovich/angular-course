import { EventEmitter, Injectable } from "@angular/core";
import { ProvidedIn } from "src/app/enums/ProvidedIn";
import { Page } from 'src/app/enums/Page'

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class NavigationService {
  currentPage = Page.SHOPPING

  onNavigation = new EventEmitter<Page>();

  navigate = (page: Page) => {
    this.currentPage = page;
    this.onNavigation.emit(page);
  }
}