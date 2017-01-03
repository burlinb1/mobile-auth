"use strict";
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var ApplicationSettings = (function () {
    function ApplicationSettings() {
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
    ApplicationSettings.prototype.getString = function (key) {
        return appSettings.getString(key);
    };
    ApplicationSettings.prototype.setTokenClientId = function (clientId) {
        appSettings.setString("clientId", clientId);
    };
    ApplicationSettings.prototype.getTokenClientId = function () {
        return appSettings.getString("clientId");
    };
    ApplicationSettings.prototype.getAudienceRegisterUrl = function () {
        return appSettings.getString("registerAudienceUrl");
    };
    ApplicationSettings.prototype.getAuthTokenUrl = function () {
        return appSettings.getString("authTokenUrl");
    };
    ApplicationSettings = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ApplicationSettings);
    return ApplicationSettings;
}());
exports.ApplicationSettings = ApplicationSettings;
//# sourceMappingURL=application-settings.js.map