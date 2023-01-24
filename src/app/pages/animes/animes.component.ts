import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  Titulo: string = "Animes"
  Banner: string = "../../../assets/images/naruto-tobi.png"
  constructor() { }

  ngOnInit(): void {
  }

}
