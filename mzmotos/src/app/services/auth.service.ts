import { CookieService } from "ngx-cookie-service";

export class AuthService {

    private tokenName = "token";

    constructor(private cookieService: CookieService) { }

    signin(token: string, flag: boolean) {
        if (flag) {
            localStorage.setItem(this.tokenName, token);
        } else {
            this.cookieService.set(this.tokenName, token);
        }
    }

    signout() {
        localStorage.removeItem(this.tokenName);
        this.cookieService.delete(this.tokenName);
    }

    getToken() {
        const token = localStorage.getItem(this.tokenName);
        if (token) {
            return token;
        }
        return this.cookieService.get(this.tokenName);
    }

    isAuthenticated() {
        return this.getToken() !== null;
    }
}