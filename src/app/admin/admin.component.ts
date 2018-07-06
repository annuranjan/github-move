import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavbarService } from "../core/navbar.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  homeClickSubscription: Subscription;
  displayMenu = '';
  fromSubmenuSub;
  submenuTitle = '';
  //Subscription to display submenu objects
  submenuTitleClickedSubs: Subscription;

  constructor(private navServ: NavbarService) { }

  ngOnInit() {
    this.subscription = this.navServ.getSideMenuTitleToBeDisplayed().subscribe(result => {
      console.log("Click registered");
      this.displayMenu = result;
    });
    this.homeClickSubscription = this.navServ.getHomeClick().subscribe(() => { this.displayMenu = ''; });
    this.submenuTitleClickedSubs = this.navServ.getSubmenuClick().subscribe(result => {
      this.fromSubmenuSub = result.split('/');
      console.log("this.fromSubmenuSub: " + this.fromSubmenuSub);
      this.submenuTitle = this.fromSubmenuSub[1];
      console.log("this.fromSubmenuSub[1]: " + this.fromSubmenuSub[1]);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.submenuTitleClickedSubs.unsubscribe();
  }
}
