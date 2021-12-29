import { Component } from '@angular/core'

const SERVER_STATUS_POLLING_INTERVAL = 1000

enum Color {
  GREEN = 'green',
  RED = 'red'
}

enum ServerStatus {
  OFFLINE = 'offline',
  ONLINE = 'online'
}

const SERVER_STATUS_TO_COLOR = {
  [ServerStatus.ONLINE]: Color.GREEN,
  [ServerStatus.OFFLINE]: Color.RED
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['server.component.css']
})
export class ServerComponent {
  serverName: string = 'Apple';

  serverStatus: ServerStatus = ServerStatus.OFFLINE;

  constructor() {
    setInterval(
      () => {
        this.serverStatus = Math.random() < 0.5 ? ServerStatus.OFFLINE : ServerStatus.ONLINE
      },
      SERVER_STATUS_POLLING_INTERVAL
    )
  }

  get serverStatusColor(): Color {
    return SERVER_STATUS_TO_COLOR[this.serverStatus];
  }
}