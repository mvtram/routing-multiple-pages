import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  hero: any = {
    id: 1,
    name: 'Windstorm'
  };



  constructor() { }

  ngOnInit() {
  }

}
