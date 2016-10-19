import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getTranslationProviders } from './i18n-providers';
import { AppModule } from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

export function main() {
  getTranslationProviders().then(providers => {
    return platformBrowserDynamic().bootstrapModule(AppModule, { providers });
  });
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
