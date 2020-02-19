import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { IExchangeRate } from './exchange-rate.component';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('appExchangeRatesFrom')
  public myRates: IExchangeRate[];

  @Input('appExchangeRatesDuration')
  public ms = 1000;


  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }

    this._autoplay = mode;
  }

  private _index = 0;
  public context;
  private _autoplay: 'on' | 'off';
  public intervalId;

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) { }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.myRates[this._index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    }
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();

  };

  public next() {
    this.resetInterval();
    this._index++;

    if (this._index >= this.myRates.length) {
      this._index = 0;
    }

    this.context.$implicit = this.myRates[this._index];
  }
  public prev() {
    this.resetInterval();
    this._index--;

    if (this._index < 0) {
      this._index = this.myRates.length - 1;
    }

    this.context.$implicit = this.myRates[this._index];
  }

  public resetInterval() {
    if (this._autoplay === 'off') {
      return;
    }
    this.clearInterval().initInterval();

  };

  public initInterval() {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms
    );
  }

  public clearInterval(): this {
    clearInterval(this.intervalId);
    return this
  }

}
