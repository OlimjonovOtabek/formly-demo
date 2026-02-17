import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import NoraTailwindPreset from './nora-tailwind-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: NoraTailwindPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.layout-dark',
          cssLayer: false
        }
      }
    })
  ]
};
