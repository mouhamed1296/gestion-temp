import { ConsoleLogger } from '@nestjs/common';
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { Climat, ClimatDocument } from './entities/climat.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@WebSocketGateway({ cors: true })
export class ClimatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  logger = new ConsoleLogger();
  @WebSocketServer()
  public server: Server;

  public socket: Socket;

  constructor(
    @InjectModel(Climat.name) private climatModel: Model<ClimatDocument>,
  ) {}

  // handleConnection(){}
  handleConnection(@ConnectedSocket() client: Socket) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const temperature = 30;
    const humidity = 40;

    const fullDate = `${day}/${month}/${year}`;
    const createdClimat = new this.climatModel({
      temperature: temperature,
      humidity: humidity,
      date: fullDate,
      heure: `${hours}:${minutes}:${seconds}`,
      moyenne: { temperature, humidity },
    });
    createdClimat.save();
    client.emit('connection', 'climat enregistré');
    /* client.join() */
  }

  // handleDisconnect(){}
  handleDisconnect(@ConnectedSocket() client: any) {
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    // );

    client.leave();
  }

  // startMyTimer(){}

  // stopMyTimer(){}
}
