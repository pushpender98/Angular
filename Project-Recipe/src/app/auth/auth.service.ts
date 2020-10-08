import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface AuthResponseData {
    idToken: string;
    refreshToken: string;
    expiresIn: string;
    email: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
       return this.http.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsKe43OLFFVY_qIJdgIXX2s0h9BWOxYps',
          {
            email: email,
            password: password,
            returnSecureToken: true
          }
        ).pipe(catchError(error => {
            let errorMsg = 'An Unknown Orrured';
            if (!error.error || !error.error.error){
                return throwError(errorMsg);
            }
            switch (error.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMsg = 'this email already exists';

              }
            return throwError(errorMsg);
        }));
    }
}
