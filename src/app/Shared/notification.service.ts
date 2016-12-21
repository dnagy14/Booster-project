import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class NotificationService {

  private alerts = [];
  public alertObs$;
  private sourceSub$ = new Subject();
  private timeouts = [];

  constructor() {
    this.alertObs$ = this.sourceSub$.asObservable();
  }

  newAlert (type, msg) {
    this.alerts.push({type: type, message: msg});
    this.sourceSub$.next(this.alerts);
    this.timeouts.push(setTimeout( () => this.closeAlert(0),  5000));
  }

  closeAlert(index) {
      this.alerts.splice(index, 1);
      this.timeouts.splice(index, 1);
  }
}
