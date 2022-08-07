import { enableProdMode, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      missingTranslation: MissingTranslationStrategy.Error,
    })
    .then(() => {
      if ('serviceWorker' in navigator && environment.production) {
        navigator.serviceWorker.register('./ngsw-worker.js');
      }
    })
    .catch(err => console.log(err));
});
