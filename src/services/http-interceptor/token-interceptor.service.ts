import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INterceptor");
    const token = this.userService.loggedInUser?.token;
    let newHeaders = req.headers;

    if (token) {
      newHeaders = newHeaders.append('Bearer', token.token);
    }
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq);
  }
}
