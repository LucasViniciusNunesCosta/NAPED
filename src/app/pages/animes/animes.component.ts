import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  Titulo: string = "Animes"

  constructor() { }

  ngOnInit(): void {
  }

}
