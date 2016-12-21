import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private url = 'bla';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.url)
      .map(res => res.json);
  }

  sendRequest(value) {
    console.log(value);
  }

}
