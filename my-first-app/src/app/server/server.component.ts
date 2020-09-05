import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .online {
            background-color: green;
            color: white;
        }
        .offline {
            background-color: red;
            color: yellow;
        }
    `]
})

export class ServerComponent {
    name: string = 'Pushpender';
    age: number = 23;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getAge(){
        return this.age;
    }

    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}
