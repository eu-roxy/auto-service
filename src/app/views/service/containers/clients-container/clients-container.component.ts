import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit {


  public clients: ClientInterface[] = [];

  ngOnInit() {
    this.clients = [];
    for (let i=0; i<=35; i++) {
      this.clients.push({
        firstName: this.genString(i),
        lastName: this.genString(i/2),
        email: this.genString(i) + '@gmail.com',
        id: 0
      })
    }
  }

  genString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

}
