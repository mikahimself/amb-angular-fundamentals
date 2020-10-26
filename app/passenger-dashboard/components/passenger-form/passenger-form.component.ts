import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

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
      <!-- Because we created a templateref (#form), we can peek at its value. -->
      {{ form.value | json}}
  </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}