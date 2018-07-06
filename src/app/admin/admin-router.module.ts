import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./eim/addEmployee/add.employee.component";
import { AdminComponent } from "./admin.component";

const adminRouter: Routes = [
    {
        path: "", component: AdminComponent, children: [{ path: 'addemployee', component: AddEmployeeComponent }]
    },

]
@NgModule({
    imports: [RouterModule.forChild(adminRouter)],
    exports: [RouterModule]
})
export class AdminRouterModule { }