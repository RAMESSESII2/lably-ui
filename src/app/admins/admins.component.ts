import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  tit = "Hello world, I'm admin";
  constructor() { }

  ngOnInit(): void {
  }

}
