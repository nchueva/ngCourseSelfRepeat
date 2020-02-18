import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { IExchangeRate } from './exchange-rate.component';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit{

  @Input('appExchangeRatesFrom')
  public rates: IExchangeRate[];


  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }

    //this._autoplay = mode;
  }

  //private _autoplay: 'on' | 'off';

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) { }

  public ngOnInit(): void {
    const context = {
      $implicit: this.rates[0]
    }
    this.vcr.createEmbeddedView(this.tpl, context);
  };

}
