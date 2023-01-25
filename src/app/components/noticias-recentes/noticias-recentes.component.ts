import { Component, Input, OnInit } from '@angular/core';
import data_notices from "../../../assets/data/data_notices.json"

@Component({
  selector: 'noticias-recentes',
  templateUrl: './noticias-recentes.component.html',
  styleUrls: ['./noticias-recentes.component.css']
})
export class NoticiasRecentesComponent implements OnInit {

  notices: any = data_notices['noticias-recentes'];
 
  constructor() { }

  ngOnInit(): void {
  }

}
