import { Component, OnInit } from '@angular/core';
import data_notices from '../../../assets/data/data_notices.json'

@Component({
  selector: 'page-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  noticias_games: any = data_notices['games']

  Titulo: string = "Games"
  Banner: string = "../../../assets/images/ffxv.webp"

  constructor() { }

  ngOnInit(): void {
  }

}
