import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Token } from 'src/interfaces/token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token: Token;

    async storeToken(token: Token) {
        this.token = token;
        console.log('Token saved',JSON.stringify(this.token))
    }

    useStoredToken(): Token {
        if (this.token === null) {            
            return null;
        }
        else {
            return this.token;
        }

    }
}