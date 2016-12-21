import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './Shared/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AlertComponent } from './alert/alert.component';

// feature modules
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';

// services
import { NotificationService }  from './Shared/notification.service';
import { ApiService } from './Shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CustomerModule,
    AdminModule,
    NgbModule.forRoot()
  ],
  providers: [NotificationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
