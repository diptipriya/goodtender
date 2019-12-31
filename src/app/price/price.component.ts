import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../service/firebase.service'
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
tenderarray :any;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {

    this.tenderarray=this.firebaseService.gettenders();

    console.log(this.tenderarray);
  }

}
