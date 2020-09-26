import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  // Habilitar ou desabilitar o botão de enviar.
  submitted: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService, private snackBar: MatSnackBar) { }

  get f() {
    return this.loginForm;
  }

  public async onSubmit() {
    if (this.f.invalid) {
      this.snackBar.open('Verifique os campos preenchidos', 'OK', {
        duration: 2000,
      });
      return;
    }

    this.submitted = true;
    this.authService.authenticate(this.f.value).then((resp) => {
      console.log(resp.token);
      this.authService.token = resp.token;
      this.router.navigate(['home']);
    }).catch(() => { 
      this.snackBar.open('Falha ao entrar', 'OK', {
        duration: 2000,
      });
      this.submitted = false; 
    })
  }
}