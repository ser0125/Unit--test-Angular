import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserRowComponent } from './user-row/user-row.component';
import { PersonRowComponent } from './person-row/person-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent,
    PersonRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
