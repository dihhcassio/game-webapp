import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FriendService } from 'src/app/shared/services/friend.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.css']
})
export class FriendTableComponent implements OnInit {

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'phone', 'currentLoan', 'action'];
  dataSource = [];

  constructor(private snackBar: MatSnackBar, private service: FriendService) { }

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
      title: 'Deseja realmente acabar com a amizade?',
      text: `Tem certeza que ${value.name} não é mais seu amigo?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, ele vacilou!',
      cancelButtonText: 'Não, ele ainda é brother',
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
    });
  }

}
