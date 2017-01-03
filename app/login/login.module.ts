import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpService } from "./../http.service";
import { LoginComponent } from "./login.component";
import { ApplicationSettings } from "./../application-settings";
import { LoginService } from "./login.service";

@NgModule({
    declarations: [LoginComponent],
    bootstrap: [LoginComponent],
    imports: [NativeScriptModule, NativeScriptHttpModule, NativeScriptFormsModule],
    providers: [ApplicationSettings, LoginService, HttpService]
})
export class LoginModule{

}