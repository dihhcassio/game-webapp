import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { GameTableComponent } from './game-table.component';

@NgModule({
  declarations: [GameTableComponent],
  exports: [GameTableComponent],
  imports: [
    CommonModule, 
    MatTableModule
  ]
})
export class GameTableModule { }
