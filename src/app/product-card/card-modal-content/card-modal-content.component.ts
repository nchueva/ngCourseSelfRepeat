import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/mock';

@Component({
  selector: 'app-card-modal-content',
  templateUrl: './card-modal-content.component.html',
  styleUrls: ['./card-modal-content.component.sass']
})
export class CardModalContentComponent implements OnInit {
  public product: IProduct;
  public save: () => void;
  public close: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
