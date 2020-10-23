import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
          {{ detail.fullname }}
      <div class="date">
        <!-- Pipes can be chained and used in ternary operators -->
        Check-in date:
        {{
          detail.checkedInDate
            ? (detail.checkedInDate | date: "yMMMMd" | uppercase)
            : "Not checked in yet"
        }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
    </div>
  `
})

export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  constructor() { }
}