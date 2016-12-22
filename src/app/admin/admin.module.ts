import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminFilterComponent } from './admin-filter/admin-filter.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FilterTablePipe } from '../Shared/filter-table.pipe';
import { FormsModule } from '@angular/forms';
import { FilterListService } from '../Shared/filter-list.service';
import { FilterSelectTablePipe } from '../Shared/filter-select-table.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AdminComponent, AdminFilterComponent, AdminListComponent, FilterTablePipe, FilterSelectTablePipe],
})
export class AdminModule { }
