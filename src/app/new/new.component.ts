import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessagedetailComponent } from '../messagedetail/messagedetail.component';
import { HttpClient } from "@angular/common/http" ;
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  // nameere:boolean= true;
  list:any=[
   
]
inputzhi: string=""
newany: string=""


constructor(private http: HttpClient,public dialog: MatDialog) {
    
   }
   bookselect( event:any){
  if(event.target.value==""){
    this.all()
  }
    this.inputzhi=event.target.value
}

openadd(): void {
  const dialogRef = this.dialog.open( MessagedetailComponent ,{
    width: '2500px',
    height:'500px',
   
  });
  dialogRef.afterClosed().subscribe(result => {
    this.all()
  });
  };
  deleteThis(event:any){
    const dialogRef = this.dialog.open( MessagedetailComponent ,{
      width: '2500px',
      height:'500px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
   
      this.all()
       
    });
    

  }
  
sou(){
  // this.nameere=true;

  // let newany=[]
  //   for(let i=0;i<this.list.length;i++){
  //    if( this.list[i].name==this.inputzhi){
  //   newany=this.list[i]
  //   this.list=[]
  //   this.list.push(newany)
  //   console.log(1)
  //   }
  // }
  let newany=[]
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  this.http.post("http://localhost:9095/cha",{ 
   "id":this.inputzhi,

},httpOptions,
 ).subscribe(response => {
    console.log(response);
    // if(response.length!=0){
    this.list=response
  // }
  });
 


}

deleteThis2(event:any){
   
     console.log(event.id)
    //  this.=event.target.value
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post("http://localhost:9095/delete",{ 
     "id":event.id,
  
  },httpOptions,
   ).subscribe(response => {
      console.log(response);
      this.list=response
    });
    
}

ngOnInit(): void {
this.all()
    
    // this.list=[]
    
    console.log(this.list)
    }
    all(){

      this.http.get("http://localhost:9095/all")
      .subscribe(res=>{ 
        // console.log(res)
        this.list=res
       })



    }

}
