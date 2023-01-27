import { Component, OnInit } from '@angular/core';
import data_notices from "../../../assets/data/data_notices.json"

@Component({
  selector: 'page-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  noticias_series: any = data_notices['series']

  constructor() { 

  }

  Titulo : string= "Series"
  Banner: string="../../../assets/images/the-witcher.webp"

  ngOnInit(): void {
  }

}
