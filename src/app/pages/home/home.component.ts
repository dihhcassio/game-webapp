import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserTableComponent } from 'src/app/components/user-table/user-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("userTable", {read: ElementRef, static: true}) userTable: UserTableComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
