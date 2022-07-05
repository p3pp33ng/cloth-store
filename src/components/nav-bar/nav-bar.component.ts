import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navigationConstant } from 'src/constants/router-navigation';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public logoUrl = '../assets/images/logo.png';
  public userName = 'Jesper';//Replaced with service call to fetch loggin user
  public isLoggedIn = false;//Replaced with service call to check if there is any loggedin user.
  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate([navigationConstant.goBack, navigationConstant.welcomePath], { relativeTo: this.activeRoute });
  }

  toWomen() {
    //Navigate to Product-List with a object with value {"catogoryFilter":"women"}
    this.router.navigate([navigationConstant.goBack, navigationConstant.productListPath, { categoryFilter: "women" }]);
  }

  toMen() {
    //Navigate to Product-List with a object with value {"catogoryFilter":"men"}
    this.router.navigate([navigationConstant.goBack, navigationConstant.productListPath, { categoryFilter: "men" }]);
  }

  toUserAccount() {
    //Navigate to User-Overview
    alert("Will navigate to Users account page");
  }

  toLogin() {
    //Navigate to User-Login
    // alert("User is not loggedin and will be promt to register or login.");
    this.router.navigate([navigationConstant.goBack, navigationConstant.userLoginPath]);
  }

  // TestClick() {
  //   this.productService.TestClick().subscribe(data => {
  //     console.log("TEST STUFF!!! " + data);
  //   });
  // }

}
