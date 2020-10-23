import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
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

  constructor() {}

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: "Mika",
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [{ name: "Joakim", age: 12 }],
      },
      {
        id: 2,
        fullname: "Joakim",
        checkedIn: true,
        checkedInDate: 1491606000000,
        children: null,
      },
      {
        id: 3,
        fullname: "Esko Mörkö",
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
      {
        id: 4,
        fullname: "Spönteri Könteri",
        checkedIn: true,
        checkedInDate: 1488412800000,
        children: [
          { name: "Birgitta", age: 6 },
          { name: "Ruustinna", age: 15 },
        ],
      },
      {
        id: 5,
        fullname: "Frida",
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
    ];
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        // Merge changes to a new passenger object using Object.assign().
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    })
  }
  
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id
    });
  }
}
