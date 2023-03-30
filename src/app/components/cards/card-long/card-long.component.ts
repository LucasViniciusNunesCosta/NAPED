import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-long',
  templateUrl: './card-long.component.html',
  styleUrls: ['./card-long.component.css']
})
export class CardLongComponent implements OnInit {

  @Input()
  TipoGenero: string = "";

  @Input()
  ImagemFundo: string = "";

  @Input()
  Titulo: string = "";

  @Input()
  Descricao: string = "";

  @Input()
  Data: string = "";

  @Input()
  dados: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
