import { Component } from '@angular/core';

// In order to be a valid web component, the selector must have a dash in the middle
// since it is a custom element (See: https://html.spec.whatwg.org/multipage/custom-elements.html).
@Component({
  selector: 'not-found',
  template: `
    <div>
      Not found, <a routerLink="/">go home</a>?
    </div>
  `
})
export class NotFoundComponent {}