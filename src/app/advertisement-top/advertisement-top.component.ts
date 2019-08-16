import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-top',
  templateUrl: './advertisement-top.component.html',
  styleUrls: ['./advertisement-top.component.scss']
})
export class AdvertisementTopComponent implements OnInit {
  public title = '투자 없이는 수익도 없다!';
  public titleFirstSection = '투자';
  public titleSecondSection = '없이는';
  public titleLastSection = '수익도 없다!';
  public subTitle = '장기경기침체, 초저금리시대';
  public bodyBefore = '자산을 키우는 새로운 투자 습관,';
  public bodyText = '피플펀드를 만나보세요';
  public buttonText = '1분만에 투자 시작하기';

  constructor() { }

  ngOnInit() {
  }

}
