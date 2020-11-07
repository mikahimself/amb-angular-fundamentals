import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// Service 
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      // This is the first thing that is loaded when the user
      // hits the 'passengers' route.
      { path: '', component: PassengerDashboardComponent },
      // This path picks up the id after the forward slash
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
]

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // Exports were removed because we use routing to get to the components.
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}