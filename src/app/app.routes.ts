import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ExploreComponent } from './explore/explore.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: '',
        component: ExploreComponent
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./auth/signup/signup.component').then(m => m.SignupComponent)
    }
];
