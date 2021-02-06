import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessagedetailComponent } from '../messagedetail/messagedetail.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  nameere=true;
  list:any=[
    { "name": "书名", "age": 1 },
  { "name": "书名2", "age": 2 },
  { "name": "书名3", "age": 3 },
  {"name": "Tanaka", "age": 4 }
]
inputzhi: string=""
newany: string=""





constructor(public dialog: MatDialog) {
    
   }
   bookselect( event:any){
    console.log(event.target.value)
    this.inputzhi=event.target.value
}

openadd(): void {
  const dialogRef = this.dialog.open( MessagedetailComponent ,{
    width: '2500px',
    height:'500px',
   
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
  };
  deleteThis(): void {
    const dialogRef = this.dialog.open( MessagedetailComponent ,{
      width: '2500px',
      height:'500px',
     
    });
  }
  
sou(){
  this.nameere=true;

  let newany=[]
    for(let i=0;i<this.list.length;i++){
    
     if( this.list[i].name==this.inputzhi){
    newany=this.list[i]
    this.list=[]
    this.list.push(newany)
    console.log(1)
    }
  }
}

deleteThis2(){

}



  ngOnInit(): void {
    
    
    // this.list=[]
    
    console.log(this.list)
    }
    

}
