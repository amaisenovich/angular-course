import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddServer = false

  serverName = ''

  constructor() {
    this.scheduleButtonToggle()
  }

  scheduleButtonToggle(): void {
    setTimeout(
      () => {
        this.allowAddServer = true
        this.serverName += '3'
      },
      2000
    )
  }

  onAddServerClick(): void {
    alert('Button clicked!')
  }

  onServerNameKeyup(e: KeyboardEvent): void {
    const input = e.target as HTMLInputElement
    this.serverName = input.value
  }
}
