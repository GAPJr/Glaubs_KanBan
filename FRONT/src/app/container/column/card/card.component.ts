import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../shared/card';
import { CARDS } from '../../../../shared/cards';
import { COLUMNS } from '../../../../shared/columns';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  atFirstColumn?: boolean;
  atLastColumn?: boolean;

  editMode: boolean = false;

  cols = COLUMNS;
  constructor() {
    this.card = new Card();
  }

  ngOnInit(): void {
    this.atFirstColumn = this.cols.indexOf(this.card.lista) == 0;
    this.atLastColumn =
      this.cols.indexOf(this.card.lista) == this.cols.length - 1;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  moveCardLeft() {
    if (this.atFirstColumn) {
      return;
    }
    const index = this.cols.indexOf(this.card.lista);
    CARDS[CARDS.indexOf(this.card)].lista = this.cols[index - 1];
  }

  moveCardRight() {
    if (this.atLastColumn) {
      return;
    }
    const index = this.cols.indexOf(this.card.lista);
    CARDS[CARDS.indexOf(this.card)].lista = this.cols[index + 1];
  }

  deleteCard() {
    CARDS.splice(CARDS.indexOf(this.card), 1);
  }
}
