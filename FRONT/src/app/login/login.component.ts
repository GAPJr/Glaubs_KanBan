import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login!: string;
  senha!: string;

  loginError:boolean = false;

  constructor(private api: APIService, private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(login: any, senha: any): void {
    this.api
      .getAuthorizationToken(login.value, senha.value)
      .subscribe((token) => {
        if (token) {
          this.api.setAuth(token);
          // console.log(this.api.authorization);
          this.router.navigateByUrl('/kanban');
          this.loginError = false;
        } else {
          console.log('Não autorizado', login.value, senha.value);
          this.loginError = true;
          this.api.clearAuth()
        }
      });
  }
}
