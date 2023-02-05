import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'noticia-banner',
  templateUrl: './noticia-banner.component.html',
  styleUrls: ['./noticia-banner.component.css']
})
export class NoticiaBannerComponent implements OnInit {

  @Input() ImagemFundo: string ="";
  @Input() TipoBanner: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
