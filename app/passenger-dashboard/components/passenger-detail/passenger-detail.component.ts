import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
        <div *ngIf="editing">
          <input 
            type="text"
            [value]="detail.fullname"
            (input)="onNameChange(name.value)"
            #name>
            <!-- #templateref-->
        </div>
        <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
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
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;
  constructor() { }

  ngOnChanges(changes) {
    if (changes.detail) {
      // Reassign this.detail to a copy of itself to prevent changes
      // from unintentionally flowing back to the parent, because 
      // the passenger data is passed in via reference.
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("on changes")
  }

  ngOnInit() {
    console.log("On Init")
  }

  onNameChange(value: string) {
    // Save the local state (i.e. updated name), as it gets deleted when user clicks Done.
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  
  onRemove() {
    // Parent needs to be informed when a passenger is removed by emitting an event.
    this.remove.emit(this.detail);
  }
}