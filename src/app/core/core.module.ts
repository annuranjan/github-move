import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRouter } from "../app-router.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [LoginComponent, NavbarComponent, SidebarComponent],
    imports: [FormsModule, CommonModule, RouterModule],
    exports: [NavbarComponent, SidebarComponent]
})
export class CoreModule {

}