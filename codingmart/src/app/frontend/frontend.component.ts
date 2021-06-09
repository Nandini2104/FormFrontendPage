import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  keyPress(event: any) {
    const pat = /[0-9\+\-\ ]/;
    let inp = String.fromCharCode(event.charCode);
       if (!pat.test(inp)) {
       alert("Input should be a Number!!")
           event.preventDefault();
      }
 }

}
