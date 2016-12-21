import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Shared/api.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.sass']
})
export class AdminListComponent implements OnInit {

  requests = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getRequests().subscribe(
      (res) => {
        console.log('Gotcha!');
        this.requests = res;
      }, (err) => {
        console.error(err);
      }
    );
  }

  /*update(id, status) {
    this.apiService.update(id, status).subscribe(
      (res) => {
        console.log('Updated!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    );
  }*/

}
