import { Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/guest', pathMatch: 'full' },
    {
        path: "guest",
        title: 'Guest home Page',
        component: GuestComponent
    },
    {
        path: "error", 
        component: ErrorComponent
    }
];
