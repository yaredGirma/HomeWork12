import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private element: ElementRef, render: Renderer) {
    render.setElementStyle(element.nativeElement, 'text-transform', 'uppercase');
  }
}