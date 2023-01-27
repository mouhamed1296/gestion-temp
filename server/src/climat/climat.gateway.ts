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
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
/* parser.on('data', console.log); */

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
    const humidity = 20;
    parser.on('data', (data) => {
      
      const climat = {temperature: data.split('/')[0], humidity: data.split('/')[1]}
      client.emit('connection', climat);
      console.log(climat);
      const fullDate = `${day}/${month}/${year}`;
      console.log(hours, minutes);
      if (hours == 8 && minutes == 0 && seconds == 0) {
        const createdClimat = new this.climatModel({
          '8h': {
            temperature: temperature,
            humidity: humidity,
          },
          '12h': {
            temperature: '--',
            humidity: '--',
          },
          '19h': {
            temperature: '--',
            humidity: '--',
          },
          temperature: temperature,
          humidity: humidity,
          date: fullDate,
          heure: `${hours}:${minutes}:${seconds}`,
          moyenne: { temperature, humidity },
        });
        createdClimat.save();
        client.emit('connection', 'climat 8h enregistré');
      }
      if (hours == 12 && minutes == 0 && seconds == 0) {
        this.climatModel
          .updateOne(
            { date: fullDate },
            { '12h': { temperature: temperature, humidity: humidity } },
          )
          .then((data) => {
            console.log(data);
          });
        client.emit('connection', 'climat 12h enregistré');
      }
      if (hours == 19 && minutes == 0 && seconds == 0) {
        this.climatModel
          .updateOne(
            { date: fullDate },
            { '19h': { temperature: temperature, humidity: humidity } },
          )
          .then((data) => {
            console.log(data);
          });
        client.emit('connection', 'climat 19h enregistré');
      }
    });
    /* client.join() */
  }

  // handleDisconnect(){}
  handleDisconnect(@ConnectedSocket() client: any) {
    client.leave();
  }

  // startMyTimer(){}

  // stopMyTimer(){}
}
