/**
 * This file is part of the angular2-chat package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ChatService} from "./chat.service";

@Component({
    selector: 'my-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
    protected messages: any = [];
    protected message: string;
    protected username: string;
    protected alert: any = false;
    protected connection: any;

    constructor(private chatService: ChatService) {
        this.username = this.chatService.getUsername();
    }

    ngOnInit() {
        this.connection = this.chatService.getMessages().subscribe(message => {
            console.log(message);
            this.messages.push(message);
        });
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }

    sendMessage() {
        this.chatService.sendMessage(this.message, this.username);
        this.message = '';
    }

    setUsername(){
        this.chatService.setUsername(this.username);
        this.alert = 'Username is set';
    }
}
