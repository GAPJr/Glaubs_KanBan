import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { COLUMNS } from 'src/app/models/columns';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  atFirstColumn?: boolean;
  atLastColumn?: boolean;
  @Input() column!: string;
  @Input() card!: Card;
  @Output() cardChange = new EventEmitter<Card[]>();

  id: string = '';
  title: string = '';
  description: string = '';
  lista: string = '';

  editMode: boolean = false;

  cols = COLUMNS;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    // this.api.getAllCards().subscribe((card) => {
    //   if (!cards) {
    //     console.log('Não há cards');
    //     return;
    //   } else {
    //     this.card = card;
    //     console.log(this.card);
    //   }

    // });
    // this.atFirstColumn = this.cols.indexOf(this.card.lista) == 0;
    // this.atLastColumn =
    //   this.cols.indexOf(this.card.lista) == this.cols.length - 1;
    // this.id = this.card.id;
    // this.title = this.card.titulo;
    // this.description = this.card.conteudo;
    // this.lista = this.card.lista;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  moveCardLeft() {
    // if (this.atFirstColumn) {
    //   return;
    // }
    // const index = this.cols.indexOf(this.card.lista);
    // this.card.lista = this.cols[index - 1];
    // this.api
    //   .changeCardById(
    //     this.card.id,
    //     this.title,
    //     this.description,
    //     this.card.lista
    //   )
    //   .subscribe((card) => {
    //     this.cardChange.emit(card);
    //     this.card = card;
    //   });
  }

  moveCardRight() {
    // if (this.atLastColumn) {
    //   return;
    // }
    // const index = this.cols.indexOf(this.card.lista);
    // this.card.lista = this.cols[index + 1];
    // this.api
    //   .changeCardById(
    //     this.card.id,
    //     this.title,
    //     this.description,
    //     this.card.lista
    //   )
    //   .subscribe((card) => {
    //     this.cardChange.emit(card);
    //     this.card = card;
    //   });
  }

  saveCard() {
    // if (this.card.id) {
    //   this.api
    //     .changeCardById(this.card.id, this.title, this.description, this.lista)
    //     .subscribe((card) => {
    //       this.card = card;
    //     });
    // } else {
    //   console.log(this.title, this.description, this.lista);
    //   this.api
    //     .createNewCard(this.title, this.description, this.lista)
    //     .subscribe((card) => {
    //       this.card = card;
    //       console.log(card);
    //     });
    // }
    // this.toggleEditMode();
  }

  cancelEdit() {
    // this.title = this.card.titulo;
    // this.description = this.card.conteudo;
    // this.lista = this.card.lista;
    // this.toggleEditMode();
  }

  deleteCard() {
    // this.api.deleteCardById(this.card.id).subscribe(() => {});
  }
}
