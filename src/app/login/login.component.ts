import { Component, OnInit } from '@angular/core';
import {Router  } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class loginComponent implements OnInit {

    //public varibaable declation
    a=10;
      constructor(private r:Router) { }
    
      ngOnInit() 
      {
          //page load function
      }
      Login()
      {
        this.a=11;
          this.r.navigate(['/login']);
      }
    
    }
    
