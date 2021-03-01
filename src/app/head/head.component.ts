
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from '@angular/common/http';
import { WwwComponent } from '../www/www.component';
import { MessageComponent } from '../message/message.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
export interface DialogData {
  animal: string;
  namee: string;
}
@Component({
  selector: 'app-root',
  templateUrl:'./head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  animal:string=""
  namee:string=""

  yza=""
  yzm="请输入验证码"
  name=""
  password=""
  dengluname="登陆"
  constructor( private http: HttpClient,public dialog: MatDialog,
    private router: Router){}
  openDialog(): void {
     console.log(this.namee)
    const dialogRef = this.dialog.open( DialogOverviewExampleDialogComponent, {
      width: '2500px',
      height:'500px',
      data: {namee: this.namee, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
title = 'myapp';
  buttomname="1"
  a(){
    console.log("qinhaoyan")
    this.buttomname="2"

  }
  aa(event:any){
    console.log(event.target.value)
    this.yza=event.target.value
    
      }
      bbb(){
       let aaa=["a","b","c","1","2","3"]
       let bbb=''
       for (var i = 0; i < aaa.length; i++) {
        var random = Math.floor(Math.random()*aaa.length)
        bbb+=aaa[random]
        }
      console.log(bbb)
      this.yzm=bbb
    }
    bb(event:any){
      console.log(event.target.value)
      this.name=event.target.value
      
        }
    dd(event:any){
          console.log(event.target.value)
          this.password=event.target.value
          
        }
     ngOnInit(){
   
    

     }
        
  

    ccc(){


      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      this.http.post("http://localhost:9095/usercha",{ 
       "username":this.name,
       "userpassword":this.password,
    },httpOptions,
     ).subscribe(response => {
      
        this.list=response
        console.log(this.list)
        if(this.list.length!=0&&this.list[0].username==this.name&&this.password==this.list[0].userpassword){
          this.router.navigate( ['/new']);

        }else{
          const dialogRef = this.dialog.open(MessageComponent, {
                width: '300px',
                height:'200px',
                
              });
          
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                
              });
        
        }
     


      });
    // }else{
    //   const dialogRef = this.dialog.open( WwwComponent, {
    //     width: '500px',
    //     height:'500px',
        
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     // this.animal = result;
    //   });
 

    // }
    }
    cccc(){
      const dialogRef = this.dialog.open(WwwComponent, {
        width: '450px',
        height:'350px',
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });

    }
          
        }
        
          



