import { Component } from '@angular/core';
import { MyHttpServiceService } from '../services/my-http-service.service';
import { response } from 'express';
import { Guest } from './guest';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.css'
})
export class GuestComponent {
  guests: Guest[] | undefined;
  // constructor(private httpService: MyHttpServiceService){}

  // getGuest() {
  //   this.httpService.getGuest().subscribe(
  //     data => this.guests = data
  //   )
  //   console.log(this.guests)
  // }
}
