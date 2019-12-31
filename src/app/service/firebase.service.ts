import { Injectable } from '@angular/core';
import{ AngularFireDatabase,AngularFireList} from 'angularfire2/database'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase:AngularFireDatabase,
    ) { }


    tenderlist: AngularFireList<any>;
  
  
  
  
gettenders(){

  this.tenderlist=this.firebase.list('tenders');
  return this.tenderlist.snapshotChanges();
}



}
