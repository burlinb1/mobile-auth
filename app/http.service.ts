import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ApplicationSettings } from "./application-settings";

@Injectable()
export class HttpService{
    constructor(private http: Http, private appSettings: ApplicationSettings){

    }

    public post(){
        
    }
} 