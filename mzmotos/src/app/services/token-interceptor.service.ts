import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export class TokenInterceptorService implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenizeRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });

        return next.handle(tokenizeRequest);
    }

}