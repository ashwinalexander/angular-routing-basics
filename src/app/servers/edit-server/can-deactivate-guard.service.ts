import { Component } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    //method should take no arguments, returns observable, promise or just boolean
    canDeactivate: () => Observable<boolean>
        | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    //will be called by angular router when we try to leave a route
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean>
        | Promise<boolean> | boolean {

        return component.canDeactivate();
    }
}