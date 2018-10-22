import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socket: Socket) {
    this.socket.on('hello', emit => console.log(emit))
  }

  socketIO = direction => {
    switch(direction) {
      case 38: 
        console.log('up')
        this.socket.emit('up', 'up event');
        break;
      case 40:
      console.log('down')
        this.socket.emit('down', 'down event');
        break;
      case 39:
      console.log('right')
        this.socket.emit('right', 'right event');
        break;
      case 37:
      console.log('left')
        this.socket.emit('left', 'left event');
        break;
      default: 'default value';
    }
  }

}
