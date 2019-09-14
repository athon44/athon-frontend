import { ParticipantsListComponent } from './components/main/participants-list/participants-list.component';
import { EventsNearbyComponent } from './components/main/events-nearby/events-nearby.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { EventComponent } from './components/main/event/event.component';
import { EventFormComponent } from './components/main/event-form/event-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: EventFormComponent },
  { path: 'event', component: EventComponent },
  { path: 'nearby', component: EventsNearbyComponent },
  { path: 'participants', component: ParticipantsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
