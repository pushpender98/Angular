import { Component } from '@angular/core';

interface Data {
  serverName: string;
  serverContent: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [
    {type: 'server', name: 'TestServer', content: 'Just a test!'}
  ];

  onServerAdded(serverData: Data) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: Data) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
