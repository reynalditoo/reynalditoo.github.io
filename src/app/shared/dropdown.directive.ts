import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseenter') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') toggleClose() {
    setTimeout(() => {this.isOpen = !this.isOpen}, 500);
  }
}
