import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FriendTableComponent } from 'src/app/components/friend-table/friend-table.component';
import { GameTableComponent } from 'src/app/components/game-table/game-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("friendTable", {read: ElementRef, static: true}) friendTable: FriendTableComponent;
  @ViewChild("gameTable", {read: ElementRef, static: true}) gameTable: FriendTableComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
