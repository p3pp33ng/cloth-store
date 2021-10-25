import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userUrls } from 'src/constants/web-api-urls';
import { DeleteUser, GetUser, IUser, LoginUser, RegisterUser, UpdateUser, User } from 'src/interfaces/users';
import { Observable, throwError } from 'rxjs';
import { Token } from 'src/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urls = userUrls;
  public loggedInUser: User | null = null;
  public IsUserLoggedIn : boolean = this.loggedInUser !== null;

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<IUser> {
    var result = new Observable<IUser>();
    try {
      result = this.httpClient.get<IUser>(this.urls["get-user"]);
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

  loginUser(user: LoginUser) {
    try {
      this.httpClient.post<Token>(this.urls["post-login-user"], user)
      .subscribe(data => {
        if (this.loggedInUser === null) {
          this.getUser().subscribe(response => {
            this.loggedInUser = new User(user.userName, 
              response.firstName,
              response.lastName,
              response.email,
              data);
          });
        }
        else{
          this.loggedInUser.token = data;
        }
      });

    } catch (error: any) {
      this.errorHandler(error);
    }
  }


  updateUser(user: UpdateUser): Observable<IUser> {
    var result = new Observable<IUser>();
    try {
      result = this.httpClient.put<IUser>(this.urls["put-update-user"], user);
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
  checkedIfLoggedIn(){
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

  getAuthToken(){
    
  }

  private errorHandler(error: HttpErrorResponse) {
    throwError(error);
  }
}
