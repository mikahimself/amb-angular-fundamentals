import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <!-- Router outlet is a directive that creates a placeholder, where -->
      <!-- the components will be created when the user changes routes in the app. -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
}
