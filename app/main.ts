// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { LoginModule } from "./login/login.module";
import {} from "./app"
const platform = platformNativeScriptDynamic();
//platform.bootstrapModule(AppModule);
platform.bootstrapModule(LoginModule);
