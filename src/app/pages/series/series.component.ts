import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  Titulo : string= "Series"
  Banner: string="../../../assets/images/the-witcher.webp"

  ngOnInit(): void {
  }

}
