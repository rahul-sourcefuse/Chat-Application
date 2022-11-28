﻿// Copyright (c) 2022 Sourcefuse Technologies
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbChatModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {ChatComponent} from './chat/chat.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './chat.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxNotificationModule} from 'ngx-notification';;
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NgxNotificationModule,
    FormsModule,
    HttpClientModule,
    NbChatModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
