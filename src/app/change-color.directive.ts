import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  arrays = [ 'white','blue', 'red', 'black', 'pink'];
  index = 0;

  constructor(private colorch: ElementRef) {
  }

  @HostListener('click') colorchange() {
    this.colorch.nativeElement.style.color = this.arrays[this.index];
    this.index = (this.index + 1) % this.arrays.length;
  }
}
