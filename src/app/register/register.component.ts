import { Component, OnInit } from '@angular/core';
import {Router  } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] 
})
export class RegisterComponent implements OnInit {

    //public varibaable declation
    a=10;
      constructor(private r:Router) { }
    
      ngOnInit() 
      {
          //page load function
      }
      
    
    }
    
