import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">
        
        <div *ngIf="name.length > 2">
          Searching for... {{ name }}
        </div>

        <!-- Behind the scenes -->
        <template [ngIf]="name.length > 2">
          <div>
            Searching for... {{ name }}
          </div>
        </template>

    </div>
  `,
})
export class AppComponent {
  // ngIf is a structural directive; it can be used to conditionally show and hide elements.

  name: string = '';

  handleChange(value: string) {
    this.name = value;
  }
}
