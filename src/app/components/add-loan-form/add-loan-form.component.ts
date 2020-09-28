import { Component, EventEmitter, OnChanges, Input, OnInit, Output, SimpleChanges  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameLoanService } from 'src/app/shared/services/game-loan.service';
import { GameService } from 'src/app/shared/services/game.service';
import { FriendService } from 'src/app/shared/services/friend.service';
import { LoanTableComponent } from '../loan-table/loan-table.component';

@Component({
  selector: 'add-loan-form',
  templateUrl: './add-loan-form.component.html',
  styleUrls: ['./add-loan-form.component.css']
})
export class AddLoanFormComponent implements OnInit  {
  @Output() onDone: EventEmitter<any> = new EventEmitter<any>();
  @Input() table: LoanTableComponent;
  submitted: boolean = false;
  listGames: [];
  listFriends: [];

  public loanForm: FormGroup = new FormGroup({
    gameId: new FormControl('', [Validators.required]),
    friendId: new FormControl('', [Validators.required])
  });
  
  get f() { return this.loanForm }

  constructor(private snackBar: MatSnackBar, private service: GameLoanService,
    private gameService: GameService, private friendService: FriendService) { }

  ngOnInit(): void {
    this.createNewFieldForm();
    this.load();
  }

  load(){
    this.gameService.available().then((data) => {
      this.listGames = data 
    });
    this.friendService.all().then((data) => {
      this.listFriends = data 
    });
  }

  onSubmit() {
    if (this.f.invalid) {
      this.snackBar.open('Verifique os campos preenchidos', 'OK', {
        duration: 2000,
      });
      return;
    }

    this.lend(this.f.value);
  }

  createNewFieldForm() {
     this.loanForm = new FormGroup({
      gameId: new FormControl('', [Validators.required]),
      friendId: new FormControl('', [Validators.required])
    });
  }

  private lend(value) {
    this.service.lend(value).then((resp) => {
      this.createNewFieldForm();
      this.submitted = false;
      this.snackBar.open('Sucesso ao Adicionar', 'OK', {
        duration: 2000,
      });
      this.onDone.emit({success: true});
    }).catch(() => {
      this.snackBar.open('Falha ao adicionar', 'OK', {
        duration: 2000,
      });
      this.submitted = false;
    })
  }

}
