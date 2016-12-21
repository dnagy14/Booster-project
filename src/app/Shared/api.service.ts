import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class ApiService {

  private url;

  constructor(private http: Http) {
    this.url = 'http://localhost:3000';
  }

  getRequests() {
    return this.http.get(`${this.url}/fuelRequests`)
      .map((res) => res.json());
  }

  sendRequest(value) {
    return this.http.post(`${this.url}/fuelRequests`, value)
      .map((res) => res.json());
  }

  update(id, status) {
    return this.http.put(`${this.url}/fuelRequests/${id}`, status)
      .map((res) => res.json());
  }

  getVehicles() {
    return this.http.get(`${this.url}/vehicleTypes`)
      .map((res) => res.json());
  }

}
