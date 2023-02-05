import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-noticia',
  templateUrl: './header-noticia.component.html',
  styleUrls: ['./header-noticia.component.css']
})
export class HeaderNoticiaComponent implements OnInit {

  @Input() titulo_header: string = "";
  @Input() descricao_header: string = "";
  @Input() data_header: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
