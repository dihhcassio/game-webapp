import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendTableComponent } from '../friend-table/friend-table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FriendService } from 'src/app/shared/services/friend.service'

@Component({
  selector: 'add-friend-form',
  templateUrl: './add-friend-form.component.html',
  styleUrls: ['./add-friend-form.component.css']
})
export class AddFriendFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  @Input() table: FriendTableComponent;
  submitted: boolean = false;

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(5)]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor(private snackBar: MatSnackBar, private service: FriendService) { }

  ngOnInit(): void {
  }

  get f() { return this.loginForm }

  onSubmit(){
    if (this.f.invalid) {
      this.snackBar.open('Verifique os campos preenchidos', 'OK', {
        duration: 2000,
      });
      return;
    }

    this.submitted = true;

    this.service.save(this.f.value).then((resp) => {
     //this.onAdd.emit({success: true})
      this.f.reset();
      this.table.load();
      this.snackBar.open('Sucesso ao Adiconar', 'OK', {
        duration: 2000,
      });
      this.submitted = false; 
    }).catch(() => { 
      this.snackBar.open('Falha ao adicionar', 'OK', {
        duration: 2000,
      });
      this.submitted = false; 
    })
  }

}