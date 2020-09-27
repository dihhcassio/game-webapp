import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGameFormComponent } from './add-game-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [AddGameFormComponent],
  exports: [
    AddGameFormComponent,
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
  ]
})
export class AddGameFormModule { }
