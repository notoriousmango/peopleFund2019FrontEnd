import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, AfterViewChecked, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-advertisement-calculation',
  templateUrl: './advertisement-calculation.component.html',
  styleUrls: ['./advertisement-calculation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdvertisementCalculationComponent implements OnInit, AfterViewInit {
  public titleFist = '피플펀드 대표 상품의';
  public titleSecond = '투자 수익을 확인해보세요.';
  public buttonString = '상품 자세히 보기';
  private contentUrl = '../../assets/peoplefund_test.json';
  public investMoney = 10;
  public manWon = 10000;
  private readonly taxRate = 0.275;
  public products: Product[];
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30
  };
  constructor(private http: HttpClient, private elementRef: ElementRef, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.http.get<ProductList>(this.contentUrl).subscribe(list => {
      this.products = list.list.sort((a, b) => a.title.localeCompare(b.title));
      this.calculateInvestment(this.products, this.investMoney);
    });
  }
  ngAfterViewInit(){
  }

  public calculateInvestment(products: Product[], investMoney: number) {
    products.forEach(product => {
      product.percentage = Math.round((product.invest_amount / product.total_amount) * 100);
      const profit = investMoney * this.manWon * (product.interest_rate / 100) * (product.month / 12);
      product.fee = Math.round(profit * (product.commission / 100));
      product.tax = Math.round(profit * this.taxRate);
      product.expectedProfit = Math.round(profit - product.fee - product.tax);
    });
  }
  public openURL(url: string) {
    window.open(`https://${url}`, '_blank');
  }
}
