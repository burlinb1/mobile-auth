"use strict";
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var application_settings_1 = require("./../application-settings");
var LoginComponent = (function () {
    function LoginComponent(appSettings, loginService) {
        this.appSettings = appSettings;
        this.loginService = loginService;
        this.userName = "hello";
        this.password = "";
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.getClientId().subscribe(function (response) {
            //alert(response.ClientId);
            _this.appSettings.setTokenClientId(response.ClientId);
            _this.setAuthToken();
        });
    };
    LoginComponent.prototype.setAuthToken = function () {
        console.log("Authenticating as " + this.userName + "...");
        this.loginService.getAuthToken(this.userName, this.password).subscribe(function (response) {
            alert(response.access_token);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "./login/login.component.html"
        }), 
        __metadata('design:paramtypes', [application_settings_1.ApplicationSettings, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map