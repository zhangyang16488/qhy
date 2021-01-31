import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  list:any=[
    { "name": "书名", "age": 1 },
  { "name": "书名2", "age": 2 },
  { "name": "书名3", "age": 3 },
  {"name": "Tanaka", "age": 4 }
]



sousuoo="在此处搜索"


  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    console.log(this.list)
    }
    ss(event:any){
      console.log(event.target.value)
      this.sousuoo=event.target.value
       }
    qqq(){
   
      
      for(let i=0;i<this.list.length;i++){
           
      if( this.list[i].name==this.sousuoo){
       // this.list=[];
       this.sousuoo=this.list[i]
     }
   }
      


    }

}
