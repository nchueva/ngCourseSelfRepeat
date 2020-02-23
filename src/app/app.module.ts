import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SanitarPipe } from './header/sanitar.pipe';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRatesDirective } from './header/exchange-rate/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductCardComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    SanitarPipe,
    ExchangeRateComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    ProductsService,
    // {
    //   provide: BASE_URL_TOKEN,  //provide: 'baseUrl',
    //   useValue: BASE_URL,       //environment.baseUrl,
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
