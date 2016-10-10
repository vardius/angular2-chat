import { TestBed } from '@angular/core/testing';
import {ChatComponent} from "./chat.component";
import {ChatService} from "./chat.service";

describe('ChatComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChatComponent],
            providers:[ChatService]
        });
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(ChatComponent);
        expect(fixture.componentInstance instanceof ChatComponent).toBe(true, 'should create ChatComponent');
    });
});
