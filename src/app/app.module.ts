import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';

import { CdkPortalComponent } from './cdk-portal.component';
import { AppComponent } from './app.component';
import { DynamicStringComponent } from './dynamic-string.component';
import { ComponentFactoryComponent } from './component-factory.component';

registerLocaleData(zh);

const routeConfig: Route[] = [
  {
    path: '',
    redirectTo: 'component-factory',
    pathMatch: 'full'
  },
  {
    path: 'component-factory',
    component: ComponentFactoryComponent
  },
  {
    path: 'cdk-portal',
    component: CdkPortalComponent
  },
  {
    path: 'dynamic-string',
    component: DynamicStringComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CdkPortalComponent,
    DynamicStringComponent,
    ComponentFactoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    NzGridModule,
    NzButtonModule,
    PortalModule,
    MatIconModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }
