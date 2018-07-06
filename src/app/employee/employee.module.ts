import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EmployeeRouterModule } from "./employee-router.module";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        EmployeeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        EmployeeRouterModule,
        CoreModule
    ]
})
export class EmployeeModule {

}