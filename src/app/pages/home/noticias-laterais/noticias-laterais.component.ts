import { Component, OnInit } from '@angular/core';
import data_notice from '../../../../assets/data/data_notices.json'

@Component({
  selector: 'noticias-laterais',
  templateUrl: './noticias-laterais.component.html',
  styleUrls: ['./noticias-laterais.component.css']
})
export class NoticiasLateraisComponent implements OnInit {

  noticias_recentes: any = data_notice['noticias-laterais'];

  constructor() {}

  ngOnInit(): void {
  }

}
