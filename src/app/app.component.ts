import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Message { 
    message: string;


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageCollections: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  constructor(private afs: AngularFirestore) {

  }


  ngOnInit() {
    this.messageCollections = this.afs.collection("messages");
    this.messages= this.messageCollections.valueChanges();
  }

}
