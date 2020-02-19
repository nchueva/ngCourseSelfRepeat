import { Component, Input } from '@angular/core';
export interface IExchangeRate {value: string; currency: number};

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.sass']
})
export class ExchangeRateComponent {


  @Input()
  public myRates: IExchangeRate[];

  constructor() { }

}
