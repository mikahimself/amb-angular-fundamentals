import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Passenger } from './models/passenger.interface';


const PASSENGER_API: string = '/api/passengers';
// When a service relies on a provider, such as Http, 
// the service must be marked with the Injectable decorator.
// This tells Angular that stuff can be injected into the service's constructor.
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  // this.http returns an Observable, so let's map
  // that as being of type Passenger[]. Make sure to
  // import Observable from rxjs.
  getPassengers(): Observable<Passenger[]> {
    return this.http
      // Get a Observable<Response> from PASSENGER_API
      .get(PASSENGER_API)
      // Use the rxjs map operator to transform Observable<Response> to
      // Observable<Passenger[]> using response.json() to extract the data as json.
      // Remember to import:
      // - Response from @angular/http
      // - map from rxjs/add/operator/map
      .map((response: Response) => response.json())
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      // Send a put request to the Passenger API
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }
}