import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-base',
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.css']
})
export class CardNewComponent implements OnInit {

  @Input() typeCard: 'small' | 'medium' | 'big' = 'small'

  constructor() { }

  ngOnInit(): void {
  }

}
