import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">

      <div>
        <h2>ngIf</h2>
        <input
          type="text"
          [value]="name"
          (input)="handleChange($event.target.value)">
          
          <div *ngIf="name.length > 2">
            Searching for... {{ name }}
          </div>

          <!-- Behind the scenes -->
          <template [ngIf]="name.length > 2">
            <div>
              Searching for... {{ name }}
            </div>
          </template>

      </div>

      <div>
        <h2>ngFor</h2>
        <h3>Airline passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            {{ i }}: {{ passenger.fullname }}
          </li>
        </ul>
      </div>
      
      <!-- Behind the scenes -->
      <div>
        <h3>Airline passengers - Templated</h3>
        <ul>
          <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{ i }}: {{ passenger.fullname }}
          </li>
          </template>
        </ul>
      </div>
    </div>
  `,
})
export class AppComponent {
  // ngIf is a structural directive; it can be used to conditionally show and hide elements.
  name: string = '';
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Mika',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Joakim',
    checkedIn: true
  }, {
    id: 3,
    fullname: 'Esko Mörkö',
    checkedIn: false
  }, {
    id: 4,
    fullname: 'Spönteri Könteri',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Frida',
    checkedIn: false
  }]

  handleChange(value: string) {
    this.name = value;
  }
}
