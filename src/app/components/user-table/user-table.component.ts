import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/shared/services/friend.service'

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phone', 'currentLoan'];
  dataSource = [];

  constructor(private service: FriendService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    console.log('load');
    this.service.all().then((data) => {
      this.dataSource = data 
    });
  }

}
