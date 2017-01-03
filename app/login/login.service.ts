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

        console.log("Getting client id...");

        return this.http.post(
            url,
            JSON.stringify({Name:"TEST"}), 
            {headers: headers})
            .map(response => response.json())
            .catch(this.handleErrors);
    }    

    public getAuthToken(userName:string, password:string){
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        let body = "grant_type=password&client_id=" + 
            this.appSettings.getTokenClientId() + 
            "&username=" + userName + 
            "&password=" + password;

        let url = this.appSettings.getAuthTokenUrl();

        console.log("Getting auth token...");

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