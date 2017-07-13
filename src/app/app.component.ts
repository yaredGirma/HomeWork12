import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Changed to upper case </h2>
  <h2 appUpper>Changed to upper case </h2>
    <h2 >List of courses </h2>
            
    <ul>
    <li *ngFor = "let item of items; let i = index">
    {{item }} 
    </ul>
    <h2 > Visiblity Hidden</h2>
    <h2 appMyvisiblity> see I disapear </h2>
    <h1 appChangeColor>Change my color </h1>
    ` 
})
export class AppComponent {
  //private str;
  private items = ["WAP", "WAA", "MWA",];
  
}
