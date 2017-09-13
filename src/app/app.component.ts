import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date()
  theDate: string = this.date.toDateString()
  theTime: string = this.date.toLocaleTimeString()
  pstTime: boolean = false;
  mstTime: boolean = false;
  cstTime: boolean = false;
  estTime: boolean = false;
  pst(){
    this.date = new Date();
    this.theDate = this.date.toDateString()
    this.theTime = this.date.toLocaleTimeString()
    this.date.toLocaleTimeString() 
    this.pstTime = true;
    this.mstTime = false;
    this.cstTime = false;
    this.estTime = false;
  }
  mst(){
    this.date = new Date();
    this.date.setHours(this.date.getHours() + 1)
    this.theDate = this.date.toDateString()
    this.theTime = this.date.toLocaleTimeString()
    this.pstTime = false;
    this.mstTime = true;
    this.cstTime = false;
    this.estTime = false;
  }
  cst(){
    this.date = new Date();
    this.date.setHours(this.date.getHours() + 2)
    this.theDate = this.date.toDateString()
    this.theTime = this.date.toLocaleTimeString()
    this.pstTime = false;
    this.mstTime = false;
    this.cstTime = true;
    this.estTime = false;
  }
  est(){
    this.date = new Date();
    this.date.setHours(this.date.getHours() + 3)
    this.theDate = this.date.toDateString()
    this.theTime = this.date.toLocaleTimeString()
    this.pstTime = false;
    this.mstTime = false;
    this.cstTime = false;
    this.estTime = true;
  }
  clear(){
    this.theDate = '';
    this.theTime = '';
    this.pstTime = false;
    this.mstTime = false;
    this.cstTime = false;
    this.estTime = false;
  }
}
