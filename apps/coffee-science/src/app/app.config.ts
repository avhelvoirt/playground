import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { CircleUser, LucideAngularModule, Search } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([authInterceptor])),
    AuthService,
    importProvidersFrom([LucideAngularModule.pick({ Search, CircleUser })]),
  ],
};
