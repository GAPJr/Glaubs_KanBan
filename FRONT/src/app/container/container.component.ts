import { Component, OnInit } from '@angular/core';
import { COLUMNS } from 'src/app/models/columns';
import { APIService } from 'src/app/services/api.service';
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

  }
}
