import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../core/navbar.service';

@Injectable()
export class AuthService {
    token: string = '';
    usertype;

    constructor(private http: HttpClient, private router: Router, private navServ: NavbarService) { }

    login(username: string, password: string) {
        this.http.post('http://localhost:1122/login', { username: username, password: password })
            .subscribe(result => {
                const resp = JSON.parse(JSON.stringify(result));
                this.token = resp.token;
                this.usertype = resp.usertype;
                console.log(resp.usertype);
                console.log("login successful!");
                switch (this.usertype) {
                    case ('admin'): {
                        console.log("navigating to /admin");
                        this.navServ.setUserType("admin");
                        this.router.navigate(['admin']);
                        break;
                    }
                    case ('manager'): {
                        console.log("navigating to /manager");
                        this.navServ.setUserType("manager");
                        this.router.navigate(['manager']);
                        break;
                    }
                    case ('employee'): {
                        console.log("navigating to /employee");
                        this.navServ.setUserType("employee");
                        this.router.navigate(['employee']);
                        break;
                    }
                }
            });
    }

    addEmployee(employee: any) {
        this.http.post("http://localhost:1122/addemployee", employee)
            .subscribe(result => {
                console.log(result);
            });
    }
}