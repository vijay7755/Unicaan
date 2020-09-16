import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface APIResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<APIResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeEUPp3_WWB0pSh3Qzztjr6T8qLhZn4LY",
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleErrors))
    }

    login(email: string, password: string) {
        return this.http.post<APIResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeEUPp3_WWB0pSh3Qzztjr6T8qLhZn4LY",
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleErrors))
    }

    private handleErrors(httpErrors: HttpErrorResponse) {
        console.log("er msg: ", httpErrors)
        let errorMessage = "An unknown error occured !"
        if (!httpErrors.error || httpErrors.error.errors) {
            return throwError(errorMessage);
        }
        switch (httpErrors.error.error.message) {
            case 'INVALID_PASSWORD':
                errorMessage = "Password is incorrect";
                break;
            case 'EMAIL_EXISTS':
                errorMessage = "This email already exists";
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "Invalid email address";
                break;
            case 'WEAK_PASSWORD : Password should be at least 6 characters':
                errorMessage = "Password should be at least 6 characters";
                break;
        }
        return throwError(errorMessage)
    }
}