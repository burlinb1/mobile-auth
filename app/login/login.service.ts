import { Injectable } from "@angular/core";
import { HttpService } from "./../http.service";
import { ApplicationSettings } from "./../application-settings";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService {
    constructor(
        private http: Http, 
        private appSettings: ApplicationSettings){

    }
    
    public getAuthTokenUrl(){
        return this.appSettings.getAuthTokenUrl();
    }

    public getClientId(){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        let url = this.appSettings.getAudienceRegisterUrl();

        return this.http.post(
            url,
            JSON.stringify({Name:"TEST"}), 
            {headers: headers})
            .map(response => response.json())
            .catch(this.handleErrors);
    }    

    private extractData
    public getAuthToken(userName:string, password:string){
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        let body = "grant_type=password&client_id=" + 
            this.appSettings.getTokenClientId() + 
            "&username=" + userName + 
            "&password=" + password;

        // Wireless LAN adapter Wi-Fi
        //let url = "http://10.0.0.41/AuthApi/token";
        let url = this.appSettings.getAuthTokenUrl();

        return this.http.post(
            url,
            body, 
            {headers: headers})
            .map(response => response.json())            
            .catch(this.handleErrors);            
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }
}