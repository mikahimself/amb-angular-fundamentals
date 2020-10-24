import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';

// When a service relies on a provider, such as Http, 
// the service must be marked with the Injectable decorator.
// This tells Angular that stuff can be injected into the service's constructor.
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return [
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