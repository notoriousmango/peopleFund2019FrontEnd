import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertisementTopComponent } from './advertisement-top/advertisement-top.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdvertisementMiddleComponent } from './advertisement-middle/advertisement-middle.component';
import { AdvertisementFooterComponent } from './advertisement-footer/advertisement-footer.component';
import { AdvertisementChatComponent } from './advertisement-chat/advertisement-chat.component';
import { AdvertisementCalculationComponent } from './advertisement-calculation/advertisement-calculation.component';

@NgModule({
   declarations: [
      AppComponent,
      AdvertisementTopComponent,
      AdvertisementMiddleComponent,
      AdvertisementFooterComponent,
      AdvertisementChatComponent,
      AdvertisementCalculationComponent
   ],
   imports: [
      BrowserModule,
      FlexLayoutModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
