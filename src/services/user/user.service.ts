import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userUrls } from 'src/constants/web-api-urls';
import { DeleteUser, GetUser, IUser, LoginUser, RegisterUser, UpdateUser, User } from 'src/interfaces/users';
import { Observable, throwError } from 'rxjs';
import { Token } from 'src/interfaces/token';
import { AuthService } from '../auth/authService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urls = userUrls;
  public loggedInUser: User | null = null;
  public IsUserLoggedIn: boolean = this.loggedInUser !== null;
  public token: Token;

  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  //TODO Look so Http Interceptor paste in token. 
  getUser(userName: string): Observable<User> {
    var result = new Observable<User>();
    try {
      result = this.httpClient.get<User>(this.urls["get-user"]);
    } catch (error: any) {
      this.errorHandler(error);
    }
    return result;
  }

  registerUser(user: RegisterUser) {
    var result = new Observable<Object>();
    try {
      result = this.httpClient.post(this.urls["post-register-user"], user);
    } catch (error: any) {
      this.errorHandler(error);
    }
    return result;
  }

  async loginUser(user: LoginUser) {
    try {
      this.getAuthToken(user).subscribe(tokenData => {
        console.log('Fetched token: ', tokenData);

        this.authService.storeToken(tokenData);

        this.getUser(user.userName).subscribe(userData => {
          console.log('Fetched user', userData);

          this.loggedInUser = userData;
        });
      });

    } catch (error: any) {
      console.log('Failed log in user');
      console.log(error);
      this.errorHandler(error);
    }
  }

  updateUser(user: UpdateUser): Observable<UpdateUser> {
    var result = new Observable<UpdateUser>();
    try {
      result = this.httpClient.put<UpdateUser>(this.urls["put-update-user"], user);
    } catch (error: any) {
      this.errorHandler(error);
    }
    return result;
  }

  deleteUser(user: DeleteUser) {
    //Body no in http delete there is
    var result: any;
    try {
      result = this.httpClient.post(this.urls["delete-user"], user);
    } catch (error: any) {
      this.errorHandler(error);
    }
    return result;
  }

  //This method is only called when the user has logged in previously and we have username
  checkedIfLoggedIn() {
    //     if (this.loggedInUser?.token !== null) {
    //       this.httpClient.get<Token>(this.urls["checked-if-logged-in"])
    //       .subscribe(data => {

    // this.loggedInUser?.token = data; 
    //       });
    //     }
    //     else{
    // //Show login page
    //     }
  }

  getAuthToken(user: LoginUser): Observable<Token> {
    var result = new Observable<Token>();
    result = this.httpClient.post<Token>(this.urls["post-login-user"], user);
    return result;
  }

  private errorHandler(error: HttpErrorResponse) {
    throwError(error);
  }
}
