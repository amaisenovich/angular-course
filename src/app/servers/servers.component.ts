import { Component } from '@angular/core';

const WHIND_UP_TIME = 2000

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddServer = false

  serverName = ''

  servers: Array<string> = []

  constructor() {
    this.scheduleAddServerToggle()
  }

  scheduleAddServerToggle(): void {
    setTimeout(
      () => {
        this.allowAddServer = true
      },
      WHIND_UP_TIME
    )
  }

  onAddServerClick(): void {
    this.servers.push(this.serverName)
    this.serverName = ''
  }

  onServerNameKeyup(e: KeyboardEvent): void {
    const input = e.target as HTMLInputElement
    this.serverName = input.value
  }
}
