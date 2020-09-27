import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service'

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {

  displayedColumns: string[] = ['title', 'category', 'currentLoan'];
  dataSource = [];

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.service.all().then((data) => {
      this.dataSource = data 
    });
  }

}
