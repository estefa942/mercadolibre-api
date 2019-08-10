import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items=[];
  constructor(private mercadolibreService: MercadolibreService) { }

  ngOnInit() {
    this.getProduct('celular')
  }

  getProduct(product){
    this.mercadolibreService.getItems(product)
    .subscribe((items)=>{
      this.items = items;
    })
  }
}
