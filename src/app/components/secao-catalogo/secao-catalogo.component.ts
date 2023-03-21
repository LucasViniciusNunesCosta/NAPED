import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'secao-catalogo',
  templateUrl: './secao-catalogo.component.html',
  styleUrls: ['./secao-catalogo.component.css']
})
export class AnimeCatalogoComponent implements OnInit {

 

  @Input()
  secaoSelecionada: any = ""

  constructor() {
    console.log(this.secaoSelecionada)
   }

  ngOnInit(): void {
  }

}
