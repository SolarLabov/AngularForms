import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from './app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeRu, 'ru-Ru', localeRuExtra);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideHttpClient(),
    provideAngularSvgIcon(),
    importProvidersFrom([BrowserAnimationsModule]),
    {
      provide: LOCALE_ID,
      useValue: 'ru-Ru'
    },
    DialogService,
  ],
};
