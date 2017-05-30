import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  @Input('appBasicHighlight') highlightColor: string;

  constructor(private el: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
