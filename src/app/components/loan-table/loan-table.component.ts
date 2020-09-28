import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameLoanService } from 'src/app/shared/services/game-loan.service';
import { AddLoanFormComponent } from '../add-loan-form/add-loan-form.component';

@Component({
  selector: 'loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.css']
})
export class LoanTableComponent implements OnInit {

  @Output() onDone: EventEmitter<any> = new EventEmitter<any>();
  @Input() form: AddLoanFormComponent;

  displayedColumns: string[] = ['status', 'deliveredDate', 'receivedDate', 'friend', 'game', 'action'];
  dataSource = [];

  constructor(private snackBar: MatSnackBar, private service: GameLoanService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.service.all().then((data) => {
      this.dataSource = data 
    });
  }

  toReceive(loan){
    let data = {
      GameId: loan.game.id,
      FriendId: loan.friend.id
    };

    Swal.fire({
      title: 'Você recebeu o jogo?',
      text: `${loan.friend.name} devolveu mesmo o seu jogo ${loan.game.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, tá aqui, na minha mão!',
      cancelButtonText: 'Não, eu cliquei sem querer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.toReceive(data).then((resp) => {
          this.load();
          this.form.load();
          this.snackBar.open('Sucesso ao devolver', 'OK', {
            duration: 2000,
          });
        }).catch(() => {
          this.snackBar.open('Falha ao devolver', 'OK', {
            duration: 2000,
          });
        })
      }
    })
  }

}
