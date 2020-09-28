import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['title', 'category', 'currentLoan', 'action'];
  dataSource = [];

  constructor(private snackBar: MatSnackBar, private service: GameService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.service.all().then((data) => {
      this.dataSource = data 
    });
  }

  edit(value){
    this.onEdit.emit(value)
  }

  delete(value){
    Swal.fire({
      title: 'Você perdeu esse jogo?',
      text: `Tem certeza que ${value.name} não é esta embaixo da cama ou com algum amigo?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, o jogo virou pó!',
      cancelButtonText: 'Não, achei no congelador!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(value).then((resp) => {
          this.load();
          this.snackBar.open('Sucesso ao remover', 'OK', {
            duration: 2000,
          });
        }).catch(() => {
          this.snackBar.open('Falha ao remover', 'OK', {
            duration: 2000,
          });
        })
        this.load();
      }
    })
  }

}
