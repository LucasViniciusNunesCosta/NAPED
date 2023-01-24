import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  Titulo: string = "Games"
  Banner: string = "../../../assets/images/ffxv.webp"

  constructor() { }

  ngOnInit(): void {
  }

}
