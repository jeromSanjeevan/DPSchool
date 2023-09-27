import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloseDropdown]'
})
export class CloseDropdownDirective {
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    // Check if the click target is not within the current dropdown
    if (!this.el.nativeElement.contains(targetElement)) {
      // Close any open dropdowns
      const openDropdowns = document.querySelectorAll('.dropdown.show');
      openDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('show');
      });
    }
  }
}
