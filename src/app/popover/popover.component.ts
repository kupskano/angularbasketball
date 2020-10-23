import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor() { }


  applications = [
    {
      "id": 1,
      "title": "",
      "urlimage": '../assets/icon/favicon.png'
    }
  ]


  ngOnInit() {}


}
