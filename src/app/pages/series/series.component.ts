import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  Titulo : string= "Series"

  ngOnInit(): void {
  }

}
