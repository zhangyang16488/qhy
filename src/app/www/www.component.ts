import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-www',
  templateUrl: './www.component.html',
  styleUrls: ['./www.component.css']
})
export class WwwComponent implements OnInit {

 name="请输入用户名"
  password="请输入密码"
  constructor(   private http: HttpClient,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef< WwwComponent>,) { }

  ngOnInit(): void {
  }

//   const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
//   this.http.post("http://localhost:9095/userinsert",{ 
//     "username":this.phone,
//     "userpassword":this.zhi2,

    
// },httpOptions,
//  ).subscribe(response => {
//     console.log(response);
   
//   });
// }
aa(event:any){
  console.log(event.target.value)
  this.name=event.target.value
  
    }
    bb(event:any){
      console.log(event.target.value)
      this.password=event.target.value
      
        }
ccc(){
  
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  this.http.post("http://localhost:9095/userinsert",{ 
    "username":this.name,
    "userpassword":this.password,

    
},httpOptions,
 ).subscribe(response => {
    console.log(response);
   
  });
  this.dialogRef.close();
}



}



