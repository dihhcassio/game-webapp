import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { AddFriendFormModule } from 'src/app/components/add-friend-form/add-friend-form.module';
import { FriendTableModule } from 'src/app/components/friend-table/friend-table.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    AddFriendFormModule,
    FriendTableModule
  ]
})
export class HomeModule { }
