import { Component, OnInit } from '@angular/core';
import data_notices from '../../../assets/data/data_notices.json'

@Component({
  selector: 'page-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  noticias_animes: any = data_notices['animes']
  
  Titulo: string = "Animes"
  Banner: string = "../../../assets/images/naruto-tobi.png"
  constructor() { }

  ngOnInit(): void {
  }

}
