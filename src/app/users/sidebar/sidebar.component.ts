import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public _authService: AuthService) {}

  ngOnInit(): void {}
}
