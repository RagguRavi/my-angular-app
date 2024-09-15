import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api-constants';
import { Observable } from 'rxjs';
import { Guest } from '../guest/guest';

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  constructor(private http :HttpClient) { }

  getGuest():Observable<Guest[]> {
    return this.http.get<Guest[]>(API_URL.GUEST)
  }
}
