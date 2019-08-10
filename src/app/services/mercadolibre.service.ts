import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(private http:HttpClient) { }

  getItems(product){
    console.log("Entraaaaa");
    
  let resp:any;
   return this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${product}&limit=20`)
   .pipe(
    map(response => {
      resp = response       
      return resp.results;
    })
  );
    
  }
  
  getSeller(sellerID: Number) {
    return this.http.get(`https://api.mercadolibre.com/users/${sellerID}`)
      .pipe(map(res => {
        return res['nickname'];
      }));
  }
  
}


