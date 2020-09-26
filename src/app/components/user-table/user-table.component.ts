import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email'];
  dataSource = [];

  // Importar snakebar e o service
  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    console.log('load');
    /** Função para buscar os dados. */
    // this.service.getAll().then((data) => {
    //   this.dataSource = data // Onde a data é uma lista.
    this.dataSource = [
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
      {name: 'Hydrogen', email: 'hidro@email.com'},
    ];
    // })
  }

}
