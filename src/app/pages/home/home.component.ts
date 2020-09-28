import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FriendTableComponent } from 'src/app/components/friend-table/friend-table.component';
import { GameTableComponent } from 'src/app/components/game-table/game-table.component';
import { LoanTableComponent } from 'src/app/components/loan-table/loan-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("friendTable", {read: ElementRef, static: true}) friendTable: FriendTableComponent;
  @ViewChild("gameTable", {read: ElementRef, static: true}) gameTable: GameTableComponent;
  @ViewChild("loanTable", {read: ElementRef, static: true}) loanTable: LoanTableComponent;
  
  friend = null;
  expandedFriendForm = false;
  expandedFriendTable = true;

  game = null;
  expandedGameForm = false;
  expandedGameTable = true;

  loan = null;
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
  }


  editLoan(value) {
    this.expandedLoanForm = true;
    this.expandedLoanTable = false;
    this.loan = value;
  }

  sucessFromLoan(){
    this.expandedLoanForm = false;
    this.expandedLoanTable = true;
    this.loan = null;
  }

  openFromLoan(){
    this.expandedLoanForm = true;
    this.expandedLoanTable = false;
  }

  openTableLoan(){
    this.expandedLoanForm = false;
    this.expandedLoanTable = true;
  }
}
