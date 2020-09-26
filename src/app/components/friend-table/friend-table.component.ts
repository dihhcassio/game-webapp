import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/shared/services/friend.service'

@Component({
  selector: 'friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.css']
})
export class FriendTableComponent implements OnInit {

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
