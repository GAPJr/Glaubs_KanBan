import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // login!: string;
  // senha!: string;

  loginForm!: FormGroup;

  loginError:boolean = false;

  constructor(private api: APIService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      senha: new FormControl(null),
    });
  }


  onSubmit(): void {
    console.log(this.loginForm.value.login);
    this.login();
    
  }

  login(): void {
    this.api
      .getAuthorizationToken(
        this.loginForm.value.login,
        this.loginForm.value.senha
      )
      .subscribe((token) => {
        if (token) {
          this.api.setAuth(token);
          // console.log(this.api.authorization);
          this.router.navigateByUrl('/kanban');
          this.loginError = false;
        } else {
          console.log(
            'Não autorizado',
            this.loginForm.value.login,
            this.loginForm.value.senha
          );
          this.loginError = true;
          this.api.clearAuth();
        }
      });
  }
}
