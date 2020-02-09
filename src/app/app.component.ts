import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngPracticeCourse';

  public imgSrc = './assets/images/moss.jpg';
  public imgWidth = 100;

  public getImgWidth( image: HTMLImageElement): void {
    console.log(image);
  }

  public search(imgWidth: number, {value}: HTMLInputElement) {
    console.log(imgWidth, value);
  }


  public constructor() {}
}
