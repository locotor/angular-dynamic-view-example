import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DynamicTemplateComponent } from './dynamic-template.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PortalModule } from '@angular/cdk/portal';
import { CdkPortalComponent } from './cdk-portal.component';

registerLocaleData(zh);

const routeConfig: Route[] = [
  {
    path: '',
    redirectTo: 'cdk',
    pathMatch: 'full'
  },
  {
    path: 'cdk',
    component: CdkPortalComponent
  },
  {
    path: 'dynamic',
    component: DynamicTemplateComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicTemplateComponent,
    CdkPortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig),
    NzGridModule,
    NzButtonModule,
    PortalModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }
