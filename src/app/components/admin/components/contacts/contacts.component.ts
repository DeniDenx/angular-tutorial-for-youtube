import {Component, OnInit} from '@angular/core';
import {filter, map, mapTo, merge, Observable} from 'rxjs';
import {User} from '../../user';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']));
  }

}
