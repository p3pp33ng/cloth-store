import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from 'src/components/product-detail/product-detail.component';
import { ProductListComponent } from 'src/components/product-list/product-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { navigationConstant } from 'src/constants/router-navigation';
import { UserAccountComponent } from 'src/components/user-account/user-account.component';
import { LoginUserComponent } from 'src/components/login-user/login-user.component';
import { RegisterUserComponent } from 'src/components/register-user/register-user.component';

const routes: Routes = [
  { path: navigationConstant.defaultPath, redirectTo: navigationConstant.welcomeRedirect, pathMatch: 'full' },//Default routing
  { path: navigationConstant.welcomePath, component: WelcomeComponent },
  { path: navigationConstant.productListPath, component: ProductListComponent },
  { path: navigationConstant.productDetailPathWithId, component: ProductDetailComponent },
  { path: navigationConstant.userAccountPath, component: UserAccountComponent },
  { path: navigationConstant.userLoginPath, component: LoginUserComponent },
  { path: navigationConstant.userRegistrationPath, component: RegisterUserComponent },
  { path: navigationConstant.notFoundPath, component: PageNotFoundComponent }//If we dont have that component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  WelcomeComponent,
  ProductListComponent,
  ProductDetailComponent,
  PageNotFoundComponent,
  UserAccountComponent,
  LoginUserComponent,
  RegisterUserComponent
];
