import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  tit = "Here's a table for you."
  username:string = "user";
  password:string = "*********";
  loginRequest: Map<string, string> = new Map();
  constructor() { }

  ngOnInit(): void {
  }
  login():void{
    this.loginRequest.set(this.password, this.username);
  }

}
