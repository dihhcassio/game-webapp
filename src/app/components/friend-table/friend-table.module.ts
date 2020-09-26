import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FriendTableComponent } from './friend-table.component';

@NgModule({
  declarations: [FriendTableComponent],
  exports: [FriendTableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FriendTableModule { }
