import { Component, OnInit } from '@angular/core';
import data_notices from '../../../../assets/data/data_notices.json'

@Component({
  selector: 'noticias-centrais',
  templateUrl: './noticias-centrais.component.html',
  styleUrls: ['./noticias-centrais.component.css']
})
export class NoticiasCentraisComponent implements OnInit {

  noticias_centrais: any = data_notices['noticias-centrais'];

  constructor() { }

  ngOnInit(): void {
  }

}
