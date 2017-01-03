"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_service_1 = require("./../http.service");
var login_component_1 = require("./login.component");
var application_settings_1 = require("./../application-settings");
var login_service_1 = require("./login.service");
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent],
            bootstrap: [login_component_1.LoginComponent],
            imports: [platform_1.NativeScriptModule, http_1.NativeScriptHttpModule, forms_1.NativeScriptFormsModule],
            providers: [application_settings_1.ApplicationSettings, login_service_1.LoginService, http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map