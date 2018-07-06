import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AddEmployeeComponent } from './eim/addEmployee/add.employee.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRouterModule } from './admin-router.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AdminComponent,
    AddEmployeeComponent
  ],
  imports: [
    SharedModule,
    AdminRouterModule,
    CoreModule,

  ],
  exports: [AdminRouterModule]
})

export class AdminModule {

}
