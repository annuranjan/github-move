import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../core/navbar.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {

  constructor(private navbServ: NavbarService) { }

  ngOnInit() { }

}
