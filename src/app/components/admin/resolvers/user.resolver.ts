import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, delay, EMPTY, Observable, of} from 'rxjs';
import {AdminService} from '../services/admin.service';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private adminService: AdminService, private router: Router ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(2000),
      catchError( () => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
