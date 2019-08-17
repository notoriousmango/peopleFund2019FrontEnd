import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss']
})
export class ProductCardComponent implements OnInit {

  public buttonString = '상품 자세히 보기';
  public investMoney = 10;
  public manWon = 10000;
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
