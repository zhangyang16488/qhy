
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from'@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MessageComponent } from './message/message.component';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FormsModule }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WwwComponent } from './www/www.component';
import {HttpClientModule} from "@angular/common/http";






@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MessageComponent,
    MessagedetailComponent,
    NewComponent,
    // MatDialogModule,
    DialogOverviewExampleDialogComponent,
    WwwComponent,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
 
  ],
  imports: [
    HttpClientModule,
     MatBottomSheetModule,
    // MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // RouterModule.forRoot([{path:'head', component: HeadComponent}])
  ],entryComponents: [
    MessagedetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

