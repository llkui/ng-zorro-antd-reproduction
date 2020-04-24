import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page.component';
import { Page2Component } from './page2.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        Page2Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgZorroAntdModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule { }
