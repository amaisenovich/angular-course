import { NgModule } from '@angular/core';
import { EmptyComponent } from './components/empty/empty.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    EmptyComponent,
    DropdownDirective
  ],
  exports: [
    EmptyComponent,
    DropdownDirective
  ]
})
export class CommonModule {
}
