import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  routes = [
    { path: '/home', label: 'Home' },
    { path: '/create', label: 'Create event' },
    { path: '/event', label: 'My event' },
    { path: '/nearby', label: 'Events nearby' },
    { path: '/participants', label: 'Participants' },
  ];

}
