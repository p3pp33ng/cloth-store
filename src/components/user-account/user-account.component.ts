import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

}
