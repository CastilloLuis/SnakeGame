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

  socketIO = () => {
    console.log('0xd')
    this.socket.emit('hello', null)
    this.socket.on('hello', emit => console.log(emit))
  }

}
