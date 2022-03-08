import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sdashbord',
  templateUrl: './sdashbord.component.html',
  styleUrls: ['./sdashbord.component.css']
})
export class SdashbordComponent implements OnInit {
  data:any

  constructor(private route :Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/profile`).subscribe((val:any)=>{
      this.data=val
      console.log(this.data);
      console.log("----------------------");
      
    })
   
  

  }
  
  logOut(){
    this.route.navigate(["login"])
  }
  

}
