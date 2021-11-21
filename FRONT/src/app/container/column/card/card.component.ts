import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Card } from 'src/shared/card';
import { COLUMNS } from 'src/shared/columns';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() card!: Card;
  atFirstColumn?: boolean;
  atLastColumn?: boolean;
  @Output() changeIt = new EventEmitter<Card>();

  title: string = '';
  description: string = '';
  lista: string = '';

  editMode: boolean = false;

  cols = COLUMNS;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.atFirstColumn = this.cols.indexOf(this.card.lista) == 0;
    this.atLastColumn =
      this.cols.indexOf(this.card.lista) == this.cols.length - 1;
    this.title = this.card.titulo;
    this.description = this.card.conteudo;
    this.lista = this.card.lista;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  moveCardLeft() {
    if (this.atFirstColumn) {
      return;
    }
    const index = this.cols.indexOf(this.card.lista);
    this.card.lista = this.cols[index - 1];
    this.api
      .changeCardById(
        this.card.id,
        this.title,
        this.description,
        this.card.lista
      )
      .subscribe((card) => {
        this.card = card;
      });
  }

  moveCardRight() {
    if (this.atLastColumn) {
      return;
    }
    const index = this.cols.indexOf(this.card.lista);
    this.card.lista = this.cols[index + 1];
    this.api
      .changeCardById(
        this.card.id,
        this.title,
        this.description,
        this.card.lista
      )
      .subscribe((card) => {
        this.card = card;
      });
  }

  saveCard() {
    if (this.card.id) {
      this.api
        .changeCardById(this.card.id, this.title, this.description, this.lista)
        .subscribe((card) => {
          this.card = card;
        });
    } else {
      console.log(this.title, this.description, this.lista);
      this.api
        .createNewCard(this.title, this.description, this.lista)
        .subscribe((card) => {
          this.card = card;
          console.log(card);
        });
    }
    this.toggleEditMode();
  }

  deleteCard() {
    this.api.deleteCardById(this.card.id).subscribe(() => {});
  }
}
