import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoanTableComponent } from './loan-table.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [LoanTableComponent],
  exports: [LoanTableComponent],
  imports: [
    CommonModule, 
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class LoanTableModule { }
