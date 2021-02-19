
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import{NewComponent} from './new/new.component';
import{MessageComponent} from './message/message.component';
import{MessagedetailComponent} from './messagedetail/messagedetail.component';




const routes: Routes = [
  {path: '',component: HeadComponent},
  {path: 'new',component: NewComponent},
  {path: 'message',component: MessageComponent}
 
]



@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

