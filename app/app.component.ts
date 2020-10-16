import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null
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

          <!-- Behind the scenes version. -->
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
            <!-- This approach is good for adding a single class -->
            <span 
              class="status"
              [class.checked-in]="passenger.checkedIn"></span>
            {{ i }}: {{ passenger.fullname }}
          </li>
        </ul>
      </div>
      
      <div>
        <h2>ngFor</h2>
        <h3>Airline passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <!-- This approach is good for adding multiple classes -->
            <span 
              class="status"
              [ngClass]="{
                'checked-in': passenger.checkedIn,
                'checked-out': !passenger.checkedIn
              }"></span>
            {{ i }}: {{ passenger.fullname }}
          </li>
        </ul>
      </div>
      
      <div>
        <h2>Style alternative 1</h2>
        <h3>Airline passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <!-- Editing the style attribute with javascript style syntax here -->
            <span 
              class="status"
              [style.backgroundColor]="passenger.checkedIn ? '#2ecc71' : 'c0392b'"></span>
            {{ i }}: {{ passenger.fullname }}
            test
          </li>
        </ul>
      </div>
      
      <div>
        <h2>Style alternative 2</h2>
        <h3>Airline passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <!-- Editing the style attribute with ngStyle here -->
            <span 
              class="status"
              [ngStyle]="{ 
                backgroundColor: (passenger.checkedIn ? '#2ecc71' : 'c0392b')
              }">
              </span>
            {{ i }}: {{ passenger.fullname }}
          </li>
        </ul>
      </div>
      
      <div>
        <h3>Airline passengers | Pipe operations</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <!-- Editing the style attribute with ngStyle here -->
            <span 
              class="status"
              [ngStyle]="{ 
                backgroundColor: (passenger.checkedIn ? '#2ecc71' : 'c0392b')
              }">
              </span>
            {{ i }}: {{ passenger.fullname }}
            <!-- JSON Pipe -->
            <p>{{ passenger | json }}
            <div class="date">
              <!-- Pipes can be chained and used in ternary operators -->
              Check-in date: {{ 
                passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase ) : 'Not checked in yet' 
              }}
            </div>
          </li>
        </ul>
      </div>
      
      <!-- Behind the scenes version of ngFor loop.
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
      -->
    </div>
  `,
})
export class AppComponent {
  // ngIf is a structural directive; it can be used to conditionally show and hide elements.
  // Pipes are generally used for data transformation
  name: string = '';
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Mika',
    checkedIn: true,
    checkedInDate: 1490742000000
  }, {
    id: 2,
    fullname: 'Joakim',
    checkedIn: true,
    checkedInDate: 1491606000000
  }, {
    id: 3,
    fullname: 'Esko Mörkö',
    checkedIn: false,
    checkedInDate: null
  }, {
    id: 4,
    fullname: 'Spönteri Könteri',
    checkedIn: true,
    checkedInDate: 1488412800000
  }, {
    id: 5,
    fullname: 'Frida',
    checkedIn: false,
    checkedInDate: null
  }]

  handleChange(value: string) {
    this.name = value;
  }
}
