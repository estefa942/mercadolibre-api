import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() product: EventEmitter <string> = new EventEmitter();
  search:string;
  constructor( private mercadolibreService: MercadolibreService) { }

  ngOnInit() {
  }

  getItems(){
    this.product.emit(this.search)
  }

}
