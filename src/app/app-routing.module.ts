import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { Page2Component } from './page2.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full'
    }, {
        path: 'page',
        component: PageComponent
    }, {
        path: 'page2',
        component: Page2Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
