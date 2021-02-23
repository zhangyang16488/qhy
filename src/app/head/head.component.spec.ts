import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yza=""
  yzm="请输入验证码"
  name="请输入用户名"
  password="请输入密码"
  constructor( 
    private router: Router
  ){}

  
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
    yz(){
    if(this.yza==this.yzm){
      console.log("duile")
    }else{
      console.log("cuole")
    }
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

        ccc(){
          this.router.navigate( ['/message']);
          if(this.name=='123456'){
            console.log("dddd")
          }else{
            console.log('nonono')
          }
        }
          


}