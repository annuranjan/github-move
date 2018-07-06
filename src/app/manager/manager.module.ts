import { NgModule } from "@angular/core";
import { ManagerComponent } from "./manager.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        ManagerComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CoreModule
    ]
})
export class ManagerModule { }