import { Component, OnInit } from '@angular/core';

@Component({
  /*
  selector: '[app-servers]', // attribute selector
  selector: '.app-servers',  // class selector
  */
  selector: 'app-servers',
  /*
  template: '<app-server></app-server><app-server></app-server>', // inline html using 'template instead of templateUrl
  */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
