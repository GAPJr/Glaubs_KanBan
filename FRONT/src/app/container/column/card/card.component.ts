import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../shared/card';
import { COLUMNS } from '../../../../shared/columns';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  isFirst?: boolean;
  isLast?: boolean;

  editMode: boolean = false;

  cols = COLUMNS;
  constructor() {
    this.card = new Card();
  }

  ngOnInit(): void {
    this.isFirst = this.cols.indexOf(this.card.lista) == 0;
    this.isLast = this.cols.indexOf(this.card.lista) == this.cols.length - 1;
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
    console.log(this.card.titulo);
  }
}
