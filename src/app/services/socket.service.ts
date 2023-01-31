import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  onSocketConnected() {
    this.socket.emit('connection', 'connected')
    /* this.socket.on('connection', (socket: Socket) => {
      console.log("connection established");

    }) */
		return this.socket.fromEvent('connection');
	}

  turFanOn() {
    this.socket.emit('fanOn', '1');
    return this.socket.fromEvent('fanStarted');
  }

  turFanOff() {
    this.socket.emit('fanOff', '0');
    return this.socket.fromEvent('fanStopped');
  }
}
