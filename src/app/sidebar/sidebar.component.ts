import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
  AfterViewInit,
  ContentChild,
  ViewContainerRef,
  TemplateRef,
  ElementRef } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', { static: true })
  public drawer!: MatDrawer;

  @ViewChild('sampleView', { read: ViewContainerRef })
  public myView: ViewContainerRef;

  @ContentChild('sampleContent')
  public myContent: TemplateRef<any>;

  constructor(private el: ElementRef) {
    console.log('constructor');
  }


  ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
    console.log(this.el);
  }

  ngAfterViewInit(): void {

    Promise.resolve().then(() => {
      this.myView.createEmbeddedView(this.myContent, { $implicit: 'My title', subtitle: 'My subtitle' });
    }
    );
  }





}
