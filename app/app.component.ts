import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h2>Interpolation, property binding and event binding</h2>
      <button (click)="handleClick()">Change name</button>
      <input 
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
        >
        {{ name }}
    </div>
    <div>
      <h2>Change binding with ngModelChange</h2>
      <input 
      type="text"
      [ngModel]="name2"
      (ngModelChange)="handleChange($event)"
      >
      {{ name2 }}
    </div>
    <div>
      <h2>Two-way binding with ngModel</h2>
      <input 
        type="text"
        [(ngModel)]="name3"
        >
      {{ name3 }}
    </div>
    <div>
      <h2>Template #ref variables</h2>
      <button (click)="handleSecondClick(username.value)">Get value</button>
      <input 
        type="text"
        #username
        >
        {{ name4 }}
    </div>
  `,
})
export class AppComponent {
  // Interpolation {{}} allows Angular to bind properties to templates and show things like the title.
  // Property binding [] lets Angular pass data to a template by binding it to a particular element.
  //   - one way data flow
  // Event binding () 
  // Two-way binding data binding [()] combines property binding and (change) event binding.
  // Template ref variable # - lets you create a reference to a particular DOM node which is accessible
  // anywhere in the template
  title: string;
  name: string = 'Mika';
  name2: string = 'Mika';
  name3: string = 'Mika';
  name4: string = 'Mika';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy = false;

  constructor() {
    this.title = "Ultimate Angular";
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick(event: any) {
    this.name = "Maki";
  }

  handleSecondClick(value: string) {
    this.name4 = value;
  }

  handleChange(value: string) {
    this.name2 = value;
  }
}
