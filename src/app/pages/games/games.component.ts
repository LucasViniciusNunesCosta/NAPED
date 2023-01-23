import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  Titulo: string = "Games"

  constructor() { }

  ngOnInit(): void {
  }

}
