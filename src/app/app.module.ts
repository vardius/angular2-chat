/**
 * This file is part of the angular2-chat package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {NgModule}           from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {CoreModule}         from './core/core.module';
import {AppComponent}       from './app.component';
import {ChatModule} from "./chat/chat.module";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        ChatModule.forRoot(),
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
