/**
 * This file is part of the angular2-chat package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as io from "socket.io-client";

@Injectable()
export class ChatService {
    protected url = 'http://localhost:8000';
    protected socket: any;

    setUsername(username:string){
        sessionStorage.setItem('username', username);
    }

    getUsername(){
        return sessionStorage.getItem('username');
    }

    sendMessage(message: string, username:string) {
        this.socket.emit('add-message', message, username);
    }

    getMessages() {
        return new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('message', (data:any) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            }
        });
    }
}