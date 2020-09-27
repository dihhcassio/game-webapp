import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FriendTableComponent } from './friend-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [FriendTableComponent],
  exports: [FriendTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class FriendTableModule { }
