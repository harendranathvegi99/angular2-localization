import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app-i18nNative/app.module';
import { TRANSLATION } from './app-i18nNative/locale/messages.fr';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

export function main() {
  const locale = document['locale'] as string;

  return platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
      { provide: TRANSLATIONS, useValue: TRANSLATION },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ]
  });
}

if (document.readyState === 'complete') {
  document['locale'] = 'fr';

  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
