//Angular framework
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ShowRoomComponent } from '../components/show-room/show-room.component';
import { TitleComponent } from '../components/title/title.component';
import { UserAccountComponent } from '../components/user-account/user-account.component';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { LoginUserComponent } from '../components/login-user/login-user.component';

//Services
import { ProductService } from 'src/services/product/product.service';
import { UserService } from 'src/services/user/user.service';
import { TokenInterceptorService } from 'src/services/http-interceptor/token-interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    routingComponents,
    ShowRoomComponent,
    TitleComponent,
    UserAccountComponent,
    RegisterUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
