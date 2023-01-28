import { Component, OnInit } from '@angular/core';
import data_notice from '../../../../assets/data/data_notices.json'

@Component({
  selector: 'noticias-principais',
  templateUrl: './noticias-principais.component.html',
  styleUrls: ['./noticias-principais.component.css']
})
export class NoticiasPrincipaisComponent implements OnInit {

  noticias_principais: any = data_notice['noticias-principais']
  noticia_main = this.noticias_principais[0].primaria; 
  noticias_secundarias = this.noticias_principais[0].secundarias; 

  constructor() {
    console.log(this.noticias_principais[0].primaria)
  }

  ngOnInit(): void {
  }

}
