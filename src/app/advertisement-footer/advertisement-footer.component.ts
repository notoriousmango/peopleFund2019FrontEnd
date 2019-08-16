import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-footer',
  templateUrl: './advertisement-footer.component.html',
  styleUrls: ['./advertisement-footer.component.scss']
})
export class AdvertisementFooterComponent implements OnInit {
  public footerTitleEnglish = 'Extraordinary Finance for the Ordinary';
  public footerTitleKorean = '보통 사람을 위한 보통이 아닌 금융을 만들겠습니다.';
  
  constructor() { }

  ngOnInit() {
  }

}
