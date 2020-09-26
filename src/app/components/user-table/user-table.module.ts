import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserTableComponent } from './user-table.component';

@NgModule({
  declarations: [UserTableComponent],
  exports: [UserTableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class UserTableModule { }
