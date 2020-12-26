import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalModule{

  public static forRoot(): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [
        ModalService,
      ],
    }
  }
}
