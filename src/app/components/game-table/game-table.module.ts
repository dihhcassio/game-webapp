import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { GameTableComponent } from './game-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GameTableComponent],
  exports: [GameTableComponent],
  imports: [
    CommonModule, 
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class GameTableModule { }
