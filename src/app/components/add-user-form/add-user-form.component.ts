import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  /** Ao adicionar vc vai retornar um evento, para atualizar a tabela. */
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  // Recebe a tabela de usuário para manipular ela.
  @Input() table: UserTableComponent;
  submitted: boolean = false;

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  /** importar o service e o snakebar para exibir mensagnes */
  constructor() { }

  ngOnInit(): void {
  }

  get f() { return this.loginForm }

  onSubmit(){
    // if (this.f.invalid) {
    //   this.snackBar.open('Verifique os campos preenchidos', 'OK', {
    //     duration: 2000,
    //   });
    //   return;
    // }

    // this.submitted = true;

    // this.service.salvarUsuário(this.f.value).then((resp) => {
    //  ****** Se salvar com sucesso *****
     this.onAdd.emit({success: true})
     this.table.load(); // -> vai retornar um evento
    // }).catch(() => { 
    //   this.snackBar.open('Falha ao adicionar', 'OK', {
    //     duration: 2000,
    //   });
    //   this.submitted = false; 
    // })
  }

}
