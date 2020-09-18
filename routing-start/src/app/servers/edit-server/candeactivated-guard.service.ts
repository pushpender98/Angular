import { RouterStateSnapshot, ActivatedRouteSnapshot,  CanDeactivate, UrlTree} from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivated {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivated> {

    canDeactivate(component: CanComponentDeactivated, 
                 currentRoute: ActivatedRouteSnapshot, 
                 currentState: RouterStateSnapshot, 
                 nextState?: RouterStateSnapshot
            ): boolean | Observable<boolean> | Promise<boolean> {
       return component.canDeactivate();
    }

  
}
