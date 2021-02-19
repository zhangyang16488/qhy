import { Component, OnInit ,Inject} from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from '@angular/common/http';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { threadId } from 'worker_threads';
export interface DialogData {
  name: string;
  age: string;
  id:string;
  phone:string;
  email:string;
}
@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  zhi1=""
  zhi2=""
  idname=""
  phone=""
  email=""
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MessagedetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private router: Router
   ) { }
   chuanzhi1(event:any){
    console.log(event.target.value)
    this.zhi1=event.target.value
    
      }
      chuanzhi2(event:any){
        console.log(event.target.value)
        this.zhi2=event.target.value
        }
  que(){ 
    console.log(this.zhi1)
if(this.zhi1!=""){
  console.log(5555);
       
    if(this.idname!=""){
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post("http://localhost:9095/updateEmployees",{ 
        "phone":this.phone,
        "email":this.zhi2,
        "name": this.zhi1,
         "id": parseInt(this.idname)
    },httpOptions,
     ).subscribe(response => {
        console.log(response);
       
      });
      this.dialogRef.close();
    }
    else{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post("http://localhost:9095/update",{ 
        "phone":2313210,"email":"313123213@qq.com",
        "name": this.zhi1,
    
    },httpOptions,
     ).subscribe(response => {
        // console.log(response);
       
      });
      // let aaa={name:this.zhi1}
      // this.data=aaa


      this.dialogRef.close();
    }
    }else{
      console.log(43434234234)
    }
        }

  ngOnInit(): void {
console.log(this.data)

    if(this.data!=null){
      this.email=this.data.email
      this.idname=this.data.id
      this.phone=this.data.phone
      this.zhi1=this.data.name;
      this.zhi2=this.data.email
    }else{


    }
  
  //  console.log(this.data)
  }
  
  

}
