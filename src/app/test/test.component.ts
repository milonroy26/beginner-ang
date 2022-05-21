import { flatMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public countery = "Bangladesh";
  public firstName = 'Jeson';
  public lastName = 'Deo';
  public display = "";
  public dplyCount = 0;
  public hasEror = true;
  public myClass = 'text-red';
  public orangeColor = 'text-orange';
  public fontSize = 'font';
  public classes = {
    'text-red': this.hasEror,
    'text-orange': !this.orangeColor,
    'font': this.fontSize,
  }
  public multiStyle = {
    color: 'red',
    backgroundColor: 'black',
    fontSize: '25px',
  }
  public sow = true;
  public title = 'programmer';
  public color = 'navy';
  public students = ["jeson", "jastin", "neimar", "mesi"];
  public stuDetails = [
    {name: 'jeson', id: 33, favorite: ['fotball', "badminton", "Music"] },
    {name: 'jastin', id: 34, favorite: ['Move', "fotball", "Tiktok"] },
    {name: 'neimar', id: 35, favorite: ['story book', "badminton", "Music"] }
  ]
  public userDetails =[
    {name: "Rahul", gmail: "rahul@gmail.com", id: 101},
    {name: "krisno", gmail: "krisno@gmail.com", id: 102},
    {name: "Ram", gmail: "ram@gmail.com", id: 103},
    {name: "Gopal", gmail: "gopal@gmail.com", id: 103},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  userName(name:string){
    console.log(name);
  }
  getFullName(fname:string, lname:string){
    fname = this.firstName;
    lname = this.lastName;
    return fname + " " + lname;
  }
  getData(value:any){
    console.log(value);
  }  
  getInput(valu:string){
    this.display = valu;
  }
  getCount(type:string){
    type === 'decrease' ? this.dplyCount++ : this.dplyCount--;
  }
  getColor() {
    return 'yellow';
  }
}
