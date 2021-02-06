import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  zhi1=""
  zhi2=""

  constructor(public dialogRef: MatDialogRef<MessagedetailComponent>,
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
          this.dialogRef.close();
          
        }



  ngOnInit(): void {
  
  }
  

}
