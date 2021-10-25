import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public userName = 'Jesper';//Replaced with service call to fetch loggin user
  public isLoggedIn = false;//Replaced with service call to check if there is any loggedin user.
  constructor() { }

  ngOnInit(): void {
  }

}
