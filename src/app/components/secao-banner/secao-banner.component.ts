import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'secao-banner',
  templateUrl: './secao-banner.component.html',
  styleUrls: ['./secao-banner.component.css']
})
export class AnimeBannerComponent implements OnInit {

  @Input() BannerTitle:string="";
  @Input() backgroundImageUrl: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
