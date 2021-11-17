import { Component, OnInit } from '@angular/core';
import { COLUMNS } from '../../shared/columns';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  columns = COLUMNS;
  constructor() {}

  ngOnInit(): void {}
}
