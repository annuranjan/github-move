import { Component, OnInit, Input, Output } from "@angular/core";
import { NavbarService } from "../navbar.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: []
})

export class NavbarComponent implements OnInit {

    role: string[];

    admin = ['Admin', 'EIM', 'Reports', 'Leave', 'Track Employee'];
    manager = ['Admin', 'EIM', 'Time Registration', 'Contact Book', 'Reports'];
    employee = ['Time Registration', 'Leave'];

    constructor(private navServ: NavbarService) { }

    ngOnInit() {
        const roleName = this.navServ.getUserType();
        console.log("NavbarComponent >> Role name: " + roleName);
        switch (roleName) {
            case ('admin'): this.role = this.admin; break;
            case ('manager'): this.role = this.manager; break;
            case ('employee'): this.role = this.employee; break;
        }
        console.log("Navbar Component >> ");
    }

    onNavbarClick(navbarItem: string) {
        if (this.role === this.admin) {
            this.navServ.sendSideMenuTitleToBeDisplayed(navbarItem.toLowerCase());
        }
    }

    onHomeClick() {
        this.navServ.sendHomeClick();
    }
}
