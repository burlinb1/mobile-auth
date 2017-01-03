"use strict";
var core_1 = require("@angular/core");
var application_settings_1 = require("./../application-settings");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var LoginService = (function () {
    function LoginService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }
    LoginService.prototype.getAuthTokenUrl = function () {
        return this.appSettings.getAuthTokenUrl();
    };
    LoginService.prototype.getClientId = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var url = this.appSettings.getAudienceRegisterUrl();
        console.log("Getting client id...");
        return this.http.post(url, JSON.stringify({ Name: "TEST" }), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    LoginService.prototype.getAuthToken = function (userName, password) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = "grant_type=password&client_id=" +
            this.appSettings.getTokenClientId() +
            "&username=" + userName +
            "&password=" + password;
        var url = this.appSettings.getAuthTokenUrl();
        console.log("Getting auth token...");
        return this.http.post(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Rx_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, application_settings_1.ApplicationSettings])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map