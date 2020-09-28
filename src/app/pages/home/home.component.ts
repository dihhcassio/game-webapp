import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddLoanFormComponent } from 'src/app/components/add-loan-form/add-loan-form.component';
import { FriendTableComponent } from 'src/app/components/friend-table/friend-table.component';
import { GameTableComponent } from 'src/app/components/game-table/game-table.component';
import { LoanTableComponent } from 'src/app/components/loan-table/loan-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("friendTable") friendTable: FriendTableComponent;
  @ViewChild("gameTable") gameTable: GameTableComponent;
  @ViewChild("loanTable") loanTable: LoanTableComponent;
  @ViewChild("loanForm") loanForm: AddLoanFormComponent;
  
  friend = null;
  expandedFriendForm = false;
  expandedFriendTable = true;

  game = null;
  expandedGameForm = false;
  expandedGameTable = true;

  expandedLoanForm = false;
  expandedLoanTable = true;  

  constructor() { }

  ngOnInit(): void {
  }

  editFriend(value) {
    this.expandedFriendForm = true;
    this.expandedFriendTable = false;
    this.friend = value;
  }

  sucessFromFriend(){
    this.expandedFriendForm = false;
    this.expandedFriendTable = true;
    this.friend = null;
  }

  openFromFriend(){
    this.expandedFriendForm = true;
    this.expandedFriendTable = false;
  }

  openTableFriend(){
    this.expandedFriendForm = false;
    this.expandedFriendTable = true;
    if (this.friendTable != undefined)
      this.friendTable.load();
  }
  

  editGame(value) {
    this.expandedGameForm = true;
    this.expandedGameTable = false;
    this.game = value;
  }

  sucessFromGame(){
    this.expandedGameForm = false;
    this.expandedGameTable = true;
    this.game = null;
  }

  openFromGame(){
    this.expandedGameForm = true;
    this.expandedGameTable = false;
  }

  openTableGame(){
    this.expandedGameForm = false;
    this.expandedGameTable = true;
    if (this.gameTable != undefined)
      this.gameTable.load();
  }

  sucessFromLoan(){    
  }

  openFromLoan(){
    this.expandedLoanForm = true;
    this.expandedLoanTable = false;
    if (this.loanForm != undefined)
      this.loanForm.load();
  }

  openTableLoan(){
    this.expandedLoanForm = false;
    this.expandedLoanTable = true;
    if (this.loanTable != undefined)
      this.loanTable.load();
  }

  selectedIndexChange(event){
    console.log(event);

    if (event == 0){
      if (this.friendTable != undefined)
        this.friendTable.load();
    } else if (event == 1){
      if (this.gameTable != undefined)
        this.gameTable.load();
    } else if (event == 2){
      if (this.loanTable != undefined)
        this.loanTable.load();
    }
  }
}
