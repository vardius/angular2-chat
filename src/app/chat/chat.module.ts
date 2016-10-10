/**
 * This file is part of the angular2-chat package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChatComponent} from "./chat.component";
import {ChatService} from "./chat.service";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ChatComponent],
    exports: [ChatComponent]
})
export class ChatModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ChatModule,
            providers: [ChatService]
        };
    }
}
