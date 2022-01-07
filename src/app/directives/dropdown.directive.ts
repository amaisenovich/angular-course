import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  isOpen = false;

  @HostListener('document:click', ['$event'])
  onClick = (e: MouseEvent) => {
    this.isOpen = this.elementRef.nativeElement.contains(e.target) ? !this.isOpen : false;
  }

  constructor(private elementRef: ElementRef) {
  }
}
