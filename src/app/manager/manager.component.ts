import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../core/navbar.service";

@Component({
  selector: "app-manager",
  templateUrl: "./manager.component.html",
  styleUrls: ["./manager.component.css"]
})

export class ManagerComponent implements OnInit {
  constructor(private navbServ: NavbarService) { }

  ngOnInit() { }

}
