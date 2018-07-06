import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NavbarService {
    userType;
    private navbarMenuSubject = new Subject<string>();
    private homeClickSubject = new Subject<any>();
    private submenuClickSubject = new Subject<string>();

    getUserType() {
        return this.userType;
    }
    setUserType(userT: string) {
        this.userType = userT;
    }

    sendSideMenuTitleToBeDisplayed(title: string) {
        this.navbarMenuSubject.next(title);
    }
    getSideMenuTitleToBeDisplayed(): Observable<string> {
        return this.navbarMenuSubject.asObservable();
    }

    sendHomeClick() {
        this.homeClickSubject.next();
    }
    getHomeClick(): Observable<any> {
        return this.homeClickSubject.asObservable();
    }

    sendSubmenuClick(myString) {
        this.submenuClickSubject.next(myString);
    }
    getSubmenuClick(): Observable<string> {
        return this.submenuClickSubject.asObservable();
    }

}