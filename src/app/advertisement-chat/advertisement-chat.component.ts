import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-chat',
  templateUrl: './advertisement-chat.component.html',
  styleUrls: ['./advertisement-chat.component.scss']
})
export class AdvertisementChatComponent implements OnInit {
  public boxTitleFirst = '대한민국의 투자 습관을'
  public boxTitleSecond = '바꾸고 있는 피플펀드';
  public chats: Chat[] = [
    {
      age: 32,
      body:
        '트렌치A가 제일 매력적인 것 같아요. 예상보다 5~6배 높은 부실률이 발생해도 투자금 손실이 없으니까, 수익 대비 위험이 정말 적잖아요',
      name: '대학원생',
      img: './../../assets/img/img_interview2@2x.png'
    },
    {
      age: 30,
      body:
        '피플펀드 담보채권의 상환은 믿을 수 있어요. 담보도 확실하고 투자금 회수를 위한 안전장치들이 확실하니까요.',
      name: '소셜마케터',
      img: '../../assets/img/img_interview1@2x.png',
    }
  ];

  constructor() {}

  ngOnInit() {}
}
