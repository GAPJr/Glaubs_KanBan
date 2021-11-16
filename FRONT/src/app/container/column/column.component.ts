import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../shared/card';
import { CARDS } from '../../../shared/cards';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column: any;
  cards = CARDS;

  constructor() {
    console.log(this.cards);
  }

  ngOnInit(): void {}

  createNewCard(lista: string) {
    const newCard = new Card();
    newCard.lista = lista;
    this.cards.push(newCard);
  }
}
