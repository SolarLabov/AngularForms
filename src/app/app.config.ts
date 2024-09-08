import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     themePath: 'assets/styles/solarized-dark.css'
    //   }
    // }
  ],
};
