import { Component } from '@angular/core';

// In order to be a valid web component, the selector must have a dash in the middle
// since it is a custom element (See: https://html.spec.whatwg.org/multipage/custom-elements.html).
@Component({
  selector: 'app-home',
  template: `
    <div>
      Airline Passenger App
    </div>
  `
})
export class HomeComponent {}