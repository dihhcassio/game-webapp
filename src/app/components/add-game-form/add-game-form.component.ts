import { Component, EventEmitter, OnChanges, Input, OnInit, Output, SimpleChanges  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendTableComponent } from '../friend-table/friend-table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent implements OnInit, OnChanges {
  @Output() onDone: EventEmitter<any> = new EventEmitter<any>();
  @Input() table: FriendTableComponent;
  submitted: boolean = false;

  public gameForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.min(5)]),
    category: new FormControl('', [Validators.required])
  });

  @Input() game = null;
  buttonLabel = "Cadastrar";
  showCancel: boolean = false;

  constructor(private snackBar: MatSnackBar, private service: GameService) { }

  ngOnInit(): void {
    this.createNewFieldForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.game != null) {
      this.showCancel = true;
      this.buttonLabel = "Editar";
      this.gameForm = new FormGroup({
        title: new FormControl(this.game ? this.game.title : "", [Validators.required, Validators.min(5)]),
        category: new FormControl(this.game ? this.game.category : "", [Validators.required])
      });
    }
  }

  get f() { return this.gameForm }

  onSubmit() {
    if (this.f.invalid) {
      this.snackBar.open('Verifique os campos preenchidos', 'OK', {
        duration: 2000,
      });
      return;
    }

    this.submitted = true;
    if (this.game === null || this.game === undefined) {
      this.save(this.f.value)
    } else {
      this.update(this.f.value);
    }
  }

  createNewFieldForm() {
    this.game = null;
    this.showCancel = false;
    this.buttonLabel = "Cadastrar";
    this.gameForm = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.min(5)]),
      category: new FormControl("", [Validators.required])
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
    this.onDone.emit({success: false});
    this.createNewFieldForm();
  }

  private update(value) {
    value.id = this.game.id;
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
