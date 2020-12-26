import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  HostListener} from '@angular/core';
import { ModalService, IModalData } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', { read: ViewContainerRef })
  public modal: ViewContainerRef;
  public isOpen = false;
  public componentFactory: ComponentFactory<any>;
  public modalContext: ComponentRef<any>;

  public constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((modalData: IModalData | null) => {
      if (!modalData) {
        this.close();
        return
      }

      this.isOpen = true;
      this.componentFactory = this.cfr.resolveComponentFactory(modalData.component);
      this.modalContext = this.modal.createComponent(this.componentFactory, 0);
      Object.keys(modalData.context)
        .forEach((key) => {
          this.modalContext.instance[key] = modalData.context[key];
        })
    });
  }

  // @HostListener('window:keyup', ['$event.keyCode'])
  @HostListener('window:keyup.esc')
  // public close(code: number = 27) {
  public close() {
    // if (code !==27) {
    //   return;
    // }
    this.modalContext.destroy();
    this.isOpen = false;
  };
}
