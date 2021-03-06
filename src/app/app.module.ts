import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdvertisementTopComponent } from './advertisement-top/advertisement-top.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertisementMiddleComponent } from './advertisement-middle/advertisement-middle.component';
import { AdvertisementFooterComponent } from './advertisement-footer/advertisement-footer.component';
import { AdvertisementChatComponent } from './advertisement-chat/advertisement-chat.component';
import { AdvertisementCalculationComponent } from './advertisement-calculation/advertisement-calculation.component';
import { MoneyToStringPipe } from './moneyToString.pipe';
import { ProgressBarComponent } from './advertisement-calculation/progressBar/progressBar.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ProductCardComponent } from './advertisement-calculation/productCard/productCard.component';
@NgModule({
   declarations: [
      AppComponent,
      AdvertisementTopComponent,
      AdvertisementMiddleComponent,
      AdvertisementFooterComponent,
      AdvertisementChatComponent,
      AdvertisementCalculationComponent,
      ProgressBarComponent,
      ProductCardComponent,
      MoneyToStringPipe,
   ],
   imports: [
      BrowserModule,
      FlexLayoutModule,
      HttpClientModule,
      FormsModule,
      NgxUsefulSwiperModule,
      BrowserAnimationsModule,
   ],
   providers: [
      HttpClientModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
