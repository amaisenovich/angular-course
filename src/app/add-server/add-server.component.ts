import { Component } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {
  ip = ''

  addServer: () => void = () => {
    this.ip = ''
  }
}
