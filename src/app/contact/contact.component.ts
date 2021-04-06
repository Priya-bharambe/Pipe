import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname = 'priya'
  lname = 'bharambe'
  email = 'priyabharambe007@gmail.com'
  city = 'pune'
  state = 'maharastra'



  constructor() { }

  ngOnInit(): void {
  }

}
