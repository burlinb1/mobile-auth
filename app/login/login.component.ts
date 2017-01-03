import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { ApplicationSettings } from "./../application-settings";

@Component({
    selector: "login",
    templateUrl: "./login/login.component.html"
})
export class LoginComponent{
    constructor(
        private appSettings: ApplicationSettings,
        private loginService: LoginService){             
    }

    userName = "hello";

    password = "";

    public onLogin(){
        
        this.loginService.getClientId().subscribe(
            response => {
                //alert(response.ClientId);
                this.appSettings.setTokenClientId(response.ClientId);
                this.setAuthToken();
            }
        );        
    } 

    private setAuthToken(){
        console.log("Authenticating as " + this.userName + "...");
        this.loginService.getAuthToken(this.userName, this.password).subscribe(
            response => {
                alert(response.access_token);
            }
        );
    }
}