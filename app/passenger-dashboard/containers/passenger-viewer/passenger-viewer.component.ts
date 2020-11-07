import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>
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
  
  constructor(
    // Inject router and activated route to access route params
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) {}
  
  ngOnInit() {
    this.route.params
      // switchMap expects an observable, which we can get from getPassenger().
      // We take the data (That is, the passenger ID from this.route.params),
      // pass it on to getPassenger(). Once the service request is resolved, 
      // we get the passenger data back through the subscribtion and bind it to 
      // this.passenger.
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
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

  goBack() {
    // Imperative routing: using the native routing API instead of, for instance, routerLink.
    this.router.navigate(['passengers'])
  }
}
