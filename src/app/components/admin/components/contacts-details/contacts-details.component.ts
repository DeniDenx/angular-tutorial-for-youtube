import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {User} from '../../user';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  id!: number;
  user!: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user'] ))
  }

}
