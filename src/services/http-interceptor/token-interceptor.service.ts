import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/authService';
import { Token } from 'src/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor");

    const token = this.authService.useStoredToken();

    console.log('Token that we recived', JSON.stringify(token));

    let newHeaders = req.headers;

    if (token) {
      newHeaders = newHeaders.append('Authorization', 'Bearer ' + token.token);
      newHeaders = newHeaders.append("Content-Type", "application/json");
      console.log('Auth headers',newHeaders);
    }
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq);
  }
}
