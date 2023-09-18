import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const CHAT_URL = "ws://localhost:5000";

export interface Message {
    source: string;
    content: string;
}

@Injectable()
export class WebsocketService {
    private socket$;
    private readonly url: string = 'ws://your_server_address:8080';
  
    constructor() { }
  
    public connect(): void {
      if (!this.socket$ || this.socket$.closed) {
        this.socket$ = webSocket(this.url);
  
        this.socket$.subscribe(
          (message) => this.handleMessage(message),
          (error) => console.log(error),
          () => console.log('WebSocket connection closed')
        );
      }
    }
  
    private handleMessage(message: any): void {
      // Handle the received appointment data
      // Update your doctor's appointment table
    }