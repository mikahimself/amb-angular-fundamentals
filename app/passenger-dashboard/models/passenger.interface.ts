export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  // Mark checkedInDate as optional and remove null as an alternative.
  // This is because we are using a template-driven form, from which the 
  // checkedInDate property is completely removed when checkedIn is false
  // instead of setting it to null.
  checkedInDate?: number,
  baggage: string
}