import { Component } from "@angular/core";

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <nav class="nav">
        <!-- Add routerLinkActiveOptions with exact: true to prevent -->
        <!-- Forward-slash from being matched with the second link.  -->
        <!-- Use property binding to bind the option object to the directive. -->
        <!-- <a 
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact : true }">
          Home
        </a> -->
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }"
          >
          {{ item.name }}
        </a>
      </nav>
      <!-- Router outlet is a directive that creates a placeholder, where -->
      <!-- the components will be created when the user changes routes in the app. -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ]
}
