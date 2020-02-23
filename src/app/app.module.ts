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
import { CardModalContentComponent } from './product-card/card-modal-content/card-modal-content.component';
import { ModalModule } from './modal/modal.module';

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
    CardModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),

  ],
  providers: [
    ProductsService, // service needs to be declared in providers
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomElementRegistry,
    //   multi: true,
    // },
    // {
    //   provide: BASE_URL_TOKEN,  //provide: 'baseUrl',
    //   useValue: BASE_URL,       //environment.baseUrl,
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
