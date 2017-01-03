import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
//import { Http } from "@angular/http";
import { AppComponent } from "./app.component";
//import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,NativeScriptHttpModule]
})
export class AppModule { }

