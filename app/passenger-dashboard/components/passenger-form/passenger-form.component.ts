import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <!-- #form templateref, with the ngForm attribute value, references and exports the ngForm directive. -->
    <!-- The NgForm directive has the ability to track the state changes and validation of the inputs inside the form. -->
    <!-- Unlike the native <form> element, NgForm also has a form property, that allows you to -->
    <!-- disable the submit button if someform.form.valid is false. -->
    <!-- novalidate attribute disables the browser's native form validation -->
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <!-- Each input in a template driven form must have a name. -->
        <!-- The name creates a property on the form as an object -->
        <!-- The ngModel directive binds to a domain model (here, detail.fullname) and,  -->
        <!-- behind the scene, sets up a form control instance to track the value, -->
        <!-- user interaction, and validation status of the control and. -->
        <!-- When two-way binding is used, ngModel keeps the view synced with the domain model. -->
        <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname">
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id">
      </div>

      <div>
        <!-- Because the radio buttons have the same name, they'll talk to each other. -->
        <!-- By using the angular binding for value, true and false get passed in as -->
        <!-- booleans and not as strings. -->
        <!--
        <label>
          <input
            type="radio"
            name="checkedIn"
            [value]="true"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            Yes
        </label>
        
        <label>
          <input
            type="radio"
            name="checkedIn"
            [value]="false"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            No
        </label>
        -->
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            Checked In?
        </label>
      </div>

      <!-- Check for the local form value and show div if it's available. -->
      <div *ngIf="form.value.checkedIn">
        Check-in date:
        <input
          type="number"
          name="checkedInDate"
          [ngModel]="detail.checkedInDate">
      </div>

      <div>
        Luggage:
        <!-- ngModel binds the control to detail.baggage, which then gets updated -->
        <!-- with the value that the user selects. -->
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <!-- If the customer has baggage defined and it matches an item.key, -->
          <!-- mark that option as selected. -->
          <!-- Shorter way to achieve the same would be to use [ngValue]="item.key" -->
          <!-- in place of [value] and [selected]. -->
          <option 
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>

        </select>
      </div>
      <!-- Because we created a templateref (#form), we can peek at its value. -->
      {{ form.value | json}}
  </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },{
      key: 'hand-only',
      value: 'Hand baggage'
    },{
      key: 'hold-only',
      value: 'Hold baggage'
    },{
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }
  ];

  toggleCheckIn(checkIn: boolean) {
    if (checkIn) {
      // this.detail.checkedInDate = +new Date()
      this.detail.checkedInDate = Date.now();
    }
  }
}