import { Component, OnInit, Input } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item:any;
  seller:string
  constructor(private mercadolibre: MercadolibreService) { }

  ngOnInit() {
    console.log("Items", this.item);
    this.mercadolibre.getSeller(this.item.seller.id).subscribe((name)=>{
      this.seller = name;
      console.log(name);
      
    }
    );
    
  }

}
