import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { APP_ROUTES_PROVIDER } from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

// bootstrap(AppComponent, [APP_ROUTES_PROVIDER]);

platformBrowserDynamic().bootstrapModule(AppModule, [APP_ROUTES_PROVIDER]);
