import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{DialogOverviewExampleDialogComponent}from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  animal: string=""
  name :string=""
  list:any= [{ "name": "书名", "age": 1 },{ "name": "书名2", "age": 2 },{ "name": "书名3", "age": 3 },{"name": "Tanaka", "age": 4 }]
  yza=""
  yzm="请输入验证码"
  namee="请输入用户名"
  password="请输入密码"
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log(this.name)
   const dialogRef = this.dialog.open( DialogOverviewExampleDialogComponent, {
     width: '2500px',
     height:'500px',
     data: {name: this.name, animal: this.animal}
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
     this.namee=event.target.value
     
       }
   dd(event:any){
         console.log(event.target.value)
         this.password=event.target.value
         
       }

   ccc(){
         // this.router.navigate( ['/new']);
         if(this.namee=='123456'||this.yza==this.yzm||this.password=='123456'){
           console.log("dddd")
          //  this.router.navigate( ['/new']);
         }else
           console.log('nonono')
         }
         ngOnInit () {
           
          for(let i=0;i<this.list.length;i++){
            console.log(i)
           if( this.list[i].name=="input输入的书名"){
            // this.list=[];
            this.list=this.list[i]
           
          }
        }
        }
        }
