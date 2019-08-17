import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, AfterViewChecked, ViewEncapsulation, ViewChild } from '@angular/core';
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
  public errorString = '';
  private readonly maxInvest = 1000;
  private readonly minInvest = 10;
  @ViewChild('investAmount', {static: true}) investAmountInput: ElementRef;
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
  ngAfterViewInit() {
  }

  public calculateInvestment(products: Product[], investMoney: number) {
    if (investMoney < this.minInvest) {
      this.errorString = '투자금은 10만 원 미만일 수 없습니다.';
      this.investMoney = this.minInvest;
      return;
    }
    if (investMoney % 10 !== 0) {
      this.errorString = '10만 원 단위로 투자 가능합니다';
      return;
    }
    this.errorString = '';
    products.forEach(product => {
      product.percentage = Math.round((product.invest_amount / product.total_amount) * 100);
      const profit = investMoney * this.manWon * (product.interest_rate / 100) * (product.month / 12);
      product.fee = Math.round(profit * (product.commission / 100));
      product.tax = Math.round(profit * this.taxRate);
      product.expectedProfit = Math.round(profit - product.fee - product.tax);
    });
  }
  public valuechange(event) {
    const newValue = event.target.value;
    if (newValue === '') {
      return;
    }
    if (Number(newValue) === 0) {
      if (this.investAmountInput.nativeElement.value.length > 1) {
        this.investAmountInput.nativeElement.value = '0';
      }
      this.investMoney = 0;
      return;
    }
    if (newValue > this.maxInvest) {
      this.errorString = '투자금은 1000만 원을 초과할 수 없습니다';
      this.investMoney = this.maxInvest;
    } else {
      if (Number(newValue) > 0) {
        this.investAmountInput.nativeElement.value = Number(newValue).toString();
      }
      this.errorString = '';
    }
  }
}
