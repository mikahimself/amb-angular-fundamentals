import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from "../../models/passenger.interface";
import { Router } from "@angular/router";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (view)="handleView($event)"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
        <!-- When the child component fires a remove event, 
             it gets handled by handleRemove() -->
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    // This here is a synchronous call for data that returned an array
    //this.passengers = this.passengerService.getPassengers();

    // Here's the updated call that gets an Observable and
    // assigns the Observables' data to the local this.passengers.
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
      // If using promises, change subscribe() to .then()
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        // If the request is successful, update this.passengers array.
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            // Merge changes to a new passenger object using Object.assign().
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
  
  handleRemove(event: Passenger) {
    this.passengerService
      .deletePassenger(event)
      .subscribe((data: Passenger) => {
        // If the request is successful, update this.passengers array.
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id
        });
      });
  }

  handleView(event: Passenger) {
    // Dynamic, imperative routing
    // The route parameter is passed separately
    this.router.navigate(['/passengers', event.id]);
  }
}
