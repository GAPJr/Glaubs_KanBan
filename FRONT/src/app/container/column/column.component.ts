import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Card } from 'src/shared/card';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column: any;

  cards: Card[] = [];

  constructor(
    private api: APIService
  ) { }

  ngOnInit(): void {
    this.api.getAllCards().subscribe((cards) => {
      if (!cards) {
        console.log('Não há cards');
        return;
      } else {
        this.cards = cards;
      }
    });
  }

  ngOnChanges(): void {
    
  }

  createNewCard(lista: string) {
    this.cards.push({ titulo: '', conteudo: '', lista: lista, id: '' });
  }
}
