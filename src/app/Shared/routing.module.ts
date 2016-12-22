import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { AdminComponent } from '../admin/admin.component';
import { CustomerComponent } from '../customer/customer.component';
import { LayoutComponent } from '../layout/layout.component';

export const appRoutes: Routes = [

  { path: '', component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'customer', pathMatch: 'full' },
        { path: 'customer', component: CustomerComponent },
        { path: 'admin', component: AdminComponent },
      ]
  },
  { path: '**', component: LayoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
