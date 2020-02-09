import { Component, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }

}
