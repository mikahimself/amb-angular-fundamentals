import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <!-- Here we are passing the passenger object to the detail @Input -->
      <!-- and catching the update @output from passenger-form -->
      <passenger-form 
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => {
        this.passenger = data
      });
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        // Here we use Object.assign to create a new object by
        // merging the changes against the current this.passenger
        // and assigning the new passenger object to this.passenger.
        this.passenger = Object.assign({}, this.passenger, event)
      })
  }
}
