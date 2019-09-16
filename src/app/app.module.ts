import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/main/event/event.component';
import { EventFormComponent } from './components/main/event-form/event-form.component';
import { EventsNearbyComponent } from './components/main/events-nearby/events-nearby.component';
import { HomeComponent } from './components/main/home/home.component';
import { ParticipantsListComponent } from './components/main/participants-list/participants-list.component';
import { InputComponent } from './components/layout/input/input.component';
import { ButtonComponent } from './components/layout/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsNearbyComponent,
    ParticipantsListComponent,
    EventComponent,
    EventFormComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
