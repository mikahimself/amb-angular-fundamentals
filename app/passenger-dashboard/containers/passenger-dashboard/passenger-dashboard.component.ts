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
      <passenger-detail>
      </passenger-detail>
      <h3>Airline passengers | Pipe operations</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            <!-- Pipes can be chained and used in ternary operators -->
            Check-in date:
            {{
              passenger.checkedInDate
                ? (passenger.checkedInDate | date: "yMMMMd" | uppercase)
                : "Not checked in yet"
            }}
          </div>
          <!-- Safe navigation operator (?) can be used to prevent Angular from throwing errors 
             when an item is not found while Angular is trying to parse a template. -->
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
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
}
