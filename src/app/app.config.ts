import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';  //provideHttpClient module is imported and added to providers first when calling an API.
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { DatePipe } from '@angular/common';
import Aura from '@primeng/themes/aura';
import { primeIndigo } from '../theme/primeIndigo';




export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),provideAnimationsAsync(),
    providePrimeNG({theme: {preset: primeIndigo}}),
     DatePipe
]
};

