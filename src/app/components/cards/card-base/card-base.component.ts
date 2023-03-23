import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-base',
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.css']
})
export class CardNewComponent implements OnInit {

  @Input() typeCard: 'small' | 'medium' | 'big' = 'small'

  @Input()
  ImagemFundo: string ="https://imgs.search.brave.com/HqwF2t0Dp0KgnK6Tmdl9oZLizLi2O1LkPTx91IXvnJ0/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9lcnJvci1kb2N1/bWVudC1pY29uLXZl/Y3Rvci1pZDEwNjA1/NTAxNzI_az02Jm09/MTA2MDU1MDE3MiZz/PTYxMng2MTImdz0w/Jmg9Z2RXeHo4SDFD/OFBheEVLRl9JdFpm/b19TLWNiUXN4QzQx/NV9uNXY5aXJ2cz0"

  @Input()
  TipoGenero: string =""

  @Input()
  Descricao: string =""

  @Input()
  dados: any = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.dados)
  }

}
