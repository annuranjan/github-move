import { Component, OnInit, OnDestroy } from "@angular/core";
import { DropdownDirective } from '../../shared/dropdown.directive';
import { NavbarService } from "../navbar.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {
    //Subscription that recieves the title of the menu.
    menuTitleSubs: Subscription;
    //menuTitleRecieved ==> Holds the value of the submenu title. 
    //Here "menuTitle" holds the submenu object
    navbarMenuTitleRecieved
    //menuTitle ==> Holds the value of the object of the submenu.
    menuTitle;
    //role ==> hold the type of the user that logged in.
    role;

    admin = [
        {
            title: "EIM",
            subMenu: [
                {
                    title: "EIM Links",
                    subMenu: ["View Employees", "Add Employee", "Edit Employees"]
                },
                {
                    title: "Add more details",
                    subMenu: ["Domain Name",
                        "Languages", "Family Details", "Education Details", "Experience Details", "Training Details", "Nominee Details", "Salary Details"]
                },
                {
                    title: "Update Profile",
                    subMenu: ["Sub 1 List Item 3", "Sub 2 List Item 3", "Sub 3 List Item 3"]
                }
            ],
        },
        {
            title: "Reports",
            subMenu: [
                {
                    title: "Report 1",
                    subMenu: ["See Report 1", "Edit Report 1"]
                },
                {
                    title: "Report 2",
                    subMenu: ["See Report 2", "Edit Report 2"]
                }
            ]

        }

    ];

    constructor(private navServ: NavbarService, private router: Router) { }

    ngOnInit() {
        this.menuTitleSubs = this.navServ.getSideMenuTitleToBeDisplayed().subscribe(result => {
            this.navbarMenuTitleRecieved = result;
            if (this.navServ.userType === "admin") {
                if (this.navbarMenuTitleRecieved) {
                    this.role = this.admin;
                    this.menuTitle = this.admin.find(obj => obj.title.toLowerCase() == this.navbarMenuTitleRecieved);
                }
            }
        });
    }

    onClickSubmenu(obj: string) {
        const link = this.navServ.userType + "/" + obj.replace(/\s/g, "").toLowerCase();

        // this.router.navigate(['admin', 'addemployee']);
        this.navServ.sendSubmenuClick(link);

        console.log("Link: " + link);

        // switch (this.navServ.userType) {
        //     case ("admin"):
        //         {
        //             console.log("Admin Clicked");
        //         }
        //         break;
        //     case ("manager"): {
        //         console.log("Manager Clicked");
        //     } break;
        //     case ("employee"): {
        //         console.log("Employee Clicked");
        //     } break;
        // }
        this.router.navigate([link]);
    }

    ngOnDestroy() {
        this.menuTitleSubs.unsubscribe();
    }
}
