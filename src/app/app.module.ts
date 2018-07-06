import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppRouter } from './app-router.module';
import { CoreModule } from "./core/core.module";
import { AdminModule } from "./admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { ManagerModule } from "./manager/manager.module";
import { EmployeeModule } from "./employee/employee.module";

import { AppComponent } from "./app.component";
import { AuthService } from "./core/auth.service";
import { AdminService } from "./admin/admin.service";
import { NavbarService } from "./core/navbar.service";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpClientModule,
    AdminModule,
    SharedModule,
    ManagerModule,
    EmployeeModule,
    CoreModule
  ],
  exports: [AppRouter, CoreModule],
  providers: [AuthService, NavbarService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
