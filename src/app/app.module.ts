import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeadComponent } from './head/head.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FormsModule }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagedetailComponent,
    NewComponent,
    HeadComponent,
    DialogOverviewExampleDialogComponent,
    // MatDialogModule,
 
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    // RouterModule.forRoot([{path:'head', component: HeadComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
