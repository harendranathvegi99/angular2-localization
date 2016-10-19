import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

export function getTranslationProviders(): Promise<Object[]> {
  // Get the locale id from the global
  const locale = localStorage.getItem('locale') || process.env.LOCALE as string;
  const noProviders: Object[] = [];

  // No locale or English: no translation providers
  if (!locale || locale === 'en') {
    return Promise.resolve(noProviders);
  }

  const translationFile = `./locale/messages.${locale}.xlf`;
  return getTranslations(translationFile)
    .then( (translations: string ) => [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ])
    .catch(() => noProviders); // ignore if file not found
}

function getTranslations(file: string) {
  return new Promise((resolve, reject) => {
    try {
      let xlfFile = require(`${file}`);
      resolve(xlfFile);
    } catch (error) {
      console.log(error);
      reject();
    }
  });
}
