import { Component, EventEmitter, OnInit, ViewChild, Output, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', { static: true })
  public drawer!: MatDrawer;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');

  };


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

}
