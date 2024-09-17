import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from './core/interceptor/headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes ,withHashLocation()
    ,withViewTransitions(),withInMemoryScrolling({scrollPositionRestoration:'top'}))
    ,provideHttpClient(withFetch() , withInterceptors([headersInterceptor]))
    ,importProvidersFrom(BrowserAnimationsModule)
    ,provideAnimations(),provideToastr()]
};
