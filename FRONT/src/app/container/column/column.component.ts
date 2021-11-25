import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column: any;

  cards!: Card[];
  card!: Card | undefined;

  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.getAllCardsFromAPI();
  }

  getAllCardsFromAPI() {
    this.api.getAllCards().subscribe((cards) => {
      if (!cards) {
        console.log('Não há cards');
        return;
      } else {
        this.cards = cards;
      }
    });
    
  }

  onCardChanged(c: Card) {
    this.cards.forEach((card) => {
      if (card.id === c.id) {
        console.log(card);
        card.conteudo = c.conteudo;
        card.titulo = c.titulo;
        card.lista = c.lista;
        console.log(card);
        // console.log(this.card);
      }
    });
  }

  createNewCard() {
    this.cards.push({ titulo: '', conteudo: '', lista: this.column, id: '' });
  }
}
