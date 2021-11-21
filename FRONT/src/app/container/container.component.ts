import { Component, OnInit } from '@angular/core';
import { COLUMNS } from 'src/shared/columns';
import { APIService } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  columns = COLUMNS;
  logedIn!: boolean;

  constructor(
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logedIn = this.api.logedIn;
    console.log(this.api.logedIn);

    if(!this.logedIn){
      this.router.navigate(['/login']);
    }
  }
}
