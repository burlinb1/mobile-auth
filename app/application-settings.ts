import { Injectable } from "@angular/core";
import appSettings = require("application-settings");

@Injectable()
export class ApplicationSettings{
    constructor(){
        //appSettings.setString("userName", "SuperUser");
        //appSettings.setString("password", "SuperUser");
        
        //appSettings.setString("clientId", "daf3341fa95741d29a23ae39fb559c4a");
        appSettings.setString("clientId", "822e15aa75c343ffb769a336d9685dcd");
        
        //appSettings.setString("authTokenUrl", "http://172.16.200.67/AuthApi/token");
        appSettings.setString("authTokenUrl", "http://10.0.0.41/AuthApi/token");
        
        appSettings.setString("registerAudienceUrl", "http://10.0.0.41/AuthApi/api/audience");
        //this.clientId = "daf3341fa95741d29a23ae39fb559c4a";

        // Wireless LAN adapter Wi-Fi
        //let url = "http://10.0.0.41/AuthApi/token";
        //let url = "http://172.16.200.67/AuthApi/token";

        //
        //let url = "http://10.0.0.41/AuthApi/api/audience";
        //let url = "http://172.16.200.67/AuthApi/api/audience";
    }

    public getString(key: string){
        return appSettings.getString(key);
    }

    public setTokenClientId(clientId:string){
        appSettings.setString("clientId", clientId);
    }

    public getTokenClientId(){
        return appSettings.getString("clientId");
    }

    public getAudienceRegisterUrl(){
        return appSettings.getString("registerAudienceUrl");
    }

    public getAuthTokenUrl(){
        return appSettings.getString("authTokenUrl");
    }
}