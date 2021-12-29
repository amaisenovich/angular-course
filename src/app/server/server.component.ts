import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  ip: number = 1;
  status: string = 'offline';

  getServerStatus: () => string = () => {
    return 'online'
  }
}