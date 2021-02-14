import { Component, OnInit ,Inject} from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  name: string;
  age: string;
 
}
@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  zhi1=""
  zhi2=""
  constructor(
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
        que(){ if(this.data!=null){
          this.data.name=this.zhi1
          this.data.age=this.zhi2

         
        }else{
          // 从做数据
  let aaa={name:this.zhi1,age:this.zhi2}
       this.data=aaa
        }
        this.dialogRef.close(this.data);
        }



  ngOnInit(): void {
    if(this.data!=null){
      this.zhi1=this.data.name;
      this.zhi2=this.data.age
    }else{


    }
  
  //  console.log(this.data)
  }
  

}
