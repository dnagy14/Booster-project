import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminFilterComponent } from './admin-filter/admin-filter.component';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, AdminFilterComponent, AdminListComponent]
})
export class AdminModule { }
