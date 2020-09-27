import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendTableComponent } from '../friend-table/friend-table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  @Input() table: FriendTableComponent;
  submitted: boolean = false;

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(5)]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor(private snackBar: MatSnackBar, private service: GameService) { }


  ngOnInit(): void {
  }

}
