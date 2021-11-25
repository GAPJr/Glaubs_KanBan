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
  card!: Card[] | undefined;

  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.api.getAllCards().subscribe((cards) => {
      if (!cards) {
        console.log('Não há cards');
        return;
      } else {
        this.cards = cards;
        console.log(this.cards);
      }
    });
    this.card
  }

  createNewCard() {
    // this.cards.push({ titulo: '', conteudo: '', lista: lista, id: '' });
  }
}
