import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  demoData: any = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]

  constructor() { }

  ngOnInit() {
  }

}
