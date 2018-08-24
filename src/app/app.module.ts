import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
    apiKey: "AIzaSyBUcXEJRBZP7uLGBvla959v0wejvpRBY4c",
    authDomain: "chatapp-c8a29.firebaseapp.com",
    databaseURL: "https://chatapp-c8a29.firebaseio.com",
    projectId: "chatapp-c8a29",
    storageBucket: "chatapp-c8a29.appspot.com",
    messagingSenderId: "812579762937"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
