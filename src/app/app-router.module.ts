import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { ManagerComponent } from "./manager/manager.component";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EIMComponent } from "./admin/eim/eim.component";
import { LoginComponent } from "./core/login/login.component";
import { AdminModule } from "./admin/admin.module";

const appRouter: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // { path: "admin", loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: "admin", loadChildren: () => AdminModule },
    { path: "manager", component: ManagerComponent },
    { path: "employee", component: EmployeeComponent }
    // ,
    // {path: "**", component: NOTFOUND}

];
@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule],
})

export class AppRouter { }