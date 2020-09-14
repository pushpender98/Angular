import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  isOpen: boolean = true;
 
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      if(this.elRef.nativeElement.contains(event.target)) {
          this.renderer.addClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
      } else {
          this.renderer.removeClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
      }
      this.isOpen = !this.isOpen;
  }

}
