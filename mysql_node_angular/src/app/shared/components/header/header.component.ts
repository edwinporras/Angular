import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private autchSvc: AuthService) { }

  ngOnInit(): void {
    // this.autchSvc.logout();
  }

}
