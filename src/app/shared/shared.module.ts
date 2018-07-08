import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd'; // Ant design  framework
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule, // Ant design framework

  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent, NgZorroAntdModule, BrowserAnimationsModule
  ],

  /** 配置 ng-zorro-antd 国际化 **/
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class SharedModule {
}
