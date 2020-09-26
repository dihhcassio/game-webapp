import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FriendTableComponent } from 'src/app/components/friend-table/friend-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("friendTable", {read: ElementRef, static: true}) friendTable: FriendTableComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
