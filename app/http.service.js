"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var application_settings_1 = require("./application-settings");
var HttpService = (function () {
    function HttpService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
    }
    HttpService.prototype.post = function () {
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, application_settings_1.ApplicationSettings])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map