"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var login_module_1 = require("./login/login.module");
var platform = platform_1.platformNativeScriptDynamic();
//platform.bootstrapModule(AppModule);
platform.bootstrapModule(login_module_1.LoginModule);
//# sourceMappingURL=main.js.map