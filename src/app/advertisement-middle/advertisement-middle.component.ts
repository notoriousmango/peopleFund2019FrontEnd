import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-middle',
  templateUrl: './advertisement-middle.component.html',
  styleUrls: ['./advertisement-middle.component.scss']
})
export class AdvertisementMiddleComponent implements OnInit {
  public bodyTitleFirst = '2017년, 재테크 잘하는 사람들은';
  public bodyTitleSecond = '지금 어디에 투자하고 있을까요?';
  constructor() { }

  ngOnInit() {
  }

}
