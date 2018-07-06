import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const managerRoutes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(managerRoutes)],
    exports: [RouterModule]
})

export class ManagerRouterModule {

}