import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/auth.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add.employee.component.html',
    styleUrls: ['./add.employee.component.css']
})

export class AddEmployeeComponent {
    employee = {
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        domainname: ''
    };
    constructor(private authServ: AuthService, private http: HttpClient) { }

    onSubmit(form: NgForm) {
        for (let key in this.employee) {
            this.employee[key] = form.value[key];
        }
        this.authServ.addEmployee(this.employee);
    }

}