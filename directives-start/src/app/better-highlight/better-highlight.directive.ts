import { OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  
  @HostBinding('style.backgroundColor') backgroundColor: string ;
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue')
   this.backgroundColor= this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
