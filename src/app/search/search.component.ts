import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FirebaseService} from '../service/firebase.service'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

tenders:Array<any>;
tenderarray=[];
keyword;
location;


  constructor( public app:AppComponent,public firebaseService: FirebaseService
    ) { 

    
  }

  ngOnInit() {

this.firebaseService.gettenders().subscribe(
  list =>{
    this.tenderarray=list.map
    (item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      };
    });
    console.log(this.tenderarray);
  }
);
}
















  transform(items: any[], searchText: string): any {
    if (!items || !searchText) { return null;
    }
    return items.filter(test => test.LOCATION.toLowerCase().indexOf(searchText)> -1 || test.DATE.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || test.SUMMARY.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || test.DEADLINE.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    }









}






