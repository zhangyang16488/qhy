import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{NewComponent} from './new/new.component';
import{MessageComponent} from './message/message.component';
import{HeadComponent} from './head/head.component';


const routes: Routes = [
  {path: 'head',component: HeadComponent},
  {path: 'message',component: MessageComponent}
 
]



@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
