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
  snapshot:any;

  //Retrieve an individual document
  messageDoc:AngularFirestoreDocument<Message>;
  message: Observable<Message>;

  //Write operations to the database
  newContent: string;

  constructor(private afs: AngularFirestore) {

  }


  ngOnInit() {
    //this.messageCollections = this.afs.collection("messages", ref => {
    //  return ref.where("order", '==',2)
      //return ref.orderBy('order', 'desc').limit(2)
    //});

    this.messageCollections = this.afs.collection("messages")
    this.messages= this.messageCollections.valueChanges(); //Observable
    //this.snapshot = this.messageCollections.snapshotChanges()

    //Retrieve a specific document
    //this.messageDoc = this.afs.doc("messages/TAYLAIhTnc2cfJ6sLBym");
//    this.message = this.messageDoc.valueChanges();

  }

  updateContent() {
    this.messageCollections.add({ message: this.newContent});
    this.newContent = "";
    //Set the collection and add new documents to that messageCollections
    //once done, do an ngFor to Retrieve that data

  }



}
