import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Client, IMessage } from "@stomp/stompjs";
import * as SockJS from 'sockjs-client';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    private _messages = new BehaviorSubject<IMessage | null>(null);
    private stompClient: any;

    constructor() {
        this.initializeWebSocketConnection();
    }

    private initializeWebSocketConnection(): void {
        console.log("initializeWebSocketConnection is called")
        const serverUrl = 'http://localhost:8080/socket';
        const ws = new SockJS(serverUrl);

        this.stompClient = new Client();
        this.stompClient.webSocketFactory = () => {
            return ws;
        };

        this.stompClient.onConnect = (frame: any) => {
            this.stompClient.subscribe('/newAppointments', (message: any) => {
                if (message.body) {
                    this._messages.next(JSON.parse(message.body));
                }
            });
        };

        this.stompClient.activate();
    }

    public get messages() {
        return this._messages.asObservable();
    }
}