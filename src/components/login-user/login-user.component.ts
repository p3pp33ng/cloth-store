import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { navigationConstant } from 'src/constants/router-navigation';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  private token: string = "";

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    //alert('UserName: ' + this.loginForm.value['userName'] + ' | Password: ' + this.loginForm.value['password']);
    let user = {
      userName: this.loginForm.value['userName'],
      password: this.loginForm.value['password']
    }
    try {
      this.userService.loginUser(user);
    } catch (error) {
      alert('Something went wrong' + error);
    }
  }

  registerUserRedirect() {
    this.router.navigate([navigationConstant.goBack, navigationConstant.userRegistrationPath]);
  }
}
