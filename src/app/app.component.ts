import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
// import { from, Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Application';
  description = 'Please login for movie customer';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }

  onSubmit(){
     this.db.list('item').push({ content: this.itemValue });
     this.itemValue = '';
  }
}
