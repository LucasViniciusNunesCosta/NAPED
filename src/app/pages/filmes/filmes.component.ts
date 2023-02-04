import { Component, OnInit } from '@angular/core';
import data_notices from "../../../assets/data/data_notices.json"

@Component({
  selector: 'page-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class SeriesComponent implements OnInit {

  noticias_filmes: any = data_notices['filmes']

  constructor() { 

  }

  Titulo : string= "Filmes"
  Banner: string="../../../assets/images/interestelar.webp"

  ngOnInit(): void {
  }

}
