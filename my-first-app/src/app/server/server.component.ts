import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent {
    name: string = 'Pushpender';
    age: number = 23;

    getAge(){
        return this.age;
    }
}
