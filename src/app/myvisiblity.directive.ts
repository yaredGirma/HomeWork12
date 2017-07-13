import { Directive, HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyvisiblity]'
})
export class MyvisiblityDirective {
   constructor() {
    this.visibility = 'show';
  }

  @HostBinding('style.visibility') visibility;
}
