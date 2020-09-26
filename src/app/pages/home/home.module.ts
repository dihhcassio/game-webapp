import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { AddUserFormModule } from 'src/app/components/add-user-form/add-user-form.module';
import { UserTableModule } from 'src/app/components/user-table/user-table.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    AddUserFormModule,
    UserTableModule
  ]
})
export class HomeModule { }
