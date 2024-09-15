import { Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        title: 'My app Hompage',
        component: AppComponent,
      },
    {
        path: "guest",
        title: 'Guest home Page',
        component: GuestComponent
    }
];
