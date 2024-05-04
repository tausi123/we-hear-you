import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/landing/landing.component"),
    },
    {
        path: "",
        loadComponent: () => import("./pages/online-resources/online-resources.component"),
    },
];
