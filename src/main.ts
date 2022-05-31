import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { fluentButton, fluentCard, fluentTextField, provideFluentDesignSystem } from '@fluentui/web-components';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

provideFluentDesignSystem().register(fluentCard(), fluentButton(), fluentTextField());
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
