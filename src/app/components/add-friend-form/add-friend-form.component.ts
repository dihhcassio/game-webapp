import { Component, EventEmitter, OnChanges, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendTableComponent } from '../friend-table/friend-table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FriendService } from 'src/app/shared/services/friend.service';

@Component({
  selector: 'add-friend-form',
  templateUrl: './add-friend-form.component.html',
  styleUrls: ['./add-friend-form.component.css']
})
export class AddFriendFormComponent implements OnInit, OnChanges {

  @Output() onDone: EventEmitter<any> = new EventEmitter<any>();
  @Input() table: FriendTableComponent;
  submitted: boolean = false;

  public friendForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(5)]),
    phone: new FormControl('', [Validators.required])
  });

  @Input() friend = null;
  buttonLabel = "Cadastrar";
  showCancel: boolean = false;

  constructor(private snackBar: MatSnackBar, private service: FriendService) { }

  ngOnInit(): void {
    this.createNewFieldForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.friend != null) {
      this.showCancel = true;
      this.buttonLabel = "Editar";
      this.friendForm = new FormGroup({
        name: new FormControl(this.friend ? this.friend.name : "", [Validators.required, Validators.min(5)]),
        phone: new FormControl(this.friend ? this.friend.phone : "", [Validators.required])
      });
    }
  }

  get f() { return this.friendForm }

  onSubmit() {
    if (this.f.invalid) {
      this.snackBar.open('Verifique os campos preenchidos', 'OK', {
        duration: 2000,
      });
      return;
    }

    this.submitted = true;
    if (this.friend === null || this.friend === undefined) {
      this.save(this.f.value)
    } else {
      this.update(this.f.value);
    }
  }

  createNewFieldForm() {
    this.friend = null;
    this.showCancel = false;
    this.buttonLabel = "Cadastrar";
    this.friendForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.min(5)]),
      phone: new FormControl("", [Validators.required])
    });
  }

  private save(value) {
    this.service.save(value).then((resp) => {
      this.onDone.emit({success: true});
      this.createNewFieldForm();
      this.table.load();
      this.snackBar.open('Sucesso ao Adicionar', 'OK', {
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

  cancelEdit() {
    this.createNewFieldForm();
    this.onDone.emit({success: false});
  }

  private update(value) {
    value.id = this.friend.id;
    this.service.update(value).then((resp) => {
      this.onDone.emit({success: true})
      this.createNewFieldForm();
      this.table.load();
      this.snackBar.open('Sucesso ao editar', 'OK', {
        duration: 2000,
      });
      this.submitted = false;
    }).catch(() => {
      this.snackBar.open('Falha ao editar', 'OK', {
        duration: 2000,
      });
      this.submitted = false;
    })
  }
  
}
