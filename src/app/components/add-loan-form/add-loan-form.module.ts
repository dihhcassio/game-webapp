import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddLoanFormComponent } from './add-loan-form.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [AddLoanFormComponent],
  exports: [
    AddLoanFormComponent,
    MatInputModule,
    MatFormFieldModule,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule 
  ]
})
export class AddLoanFormModule { }
