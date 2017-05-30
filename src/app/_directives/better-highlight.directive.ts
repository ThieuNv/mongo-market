import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }
}

