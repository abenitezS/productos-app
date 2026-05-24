import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAR);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([]),
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ]
};
