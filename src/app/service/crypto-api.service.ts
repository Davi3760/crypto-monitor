import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  private url: string = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,XRP,'
  +'DOGE,ADA,SOL,MATIC,DOT,SHIB,DAI,TRX,AVAX,UNI,WBTC,LEO,LTC,ATOM,LINK,ETC,FTT,CRO,XLM,'+
  'XMR,ALGO,NEAR,BCH,TON,QNT,FIL&tsyms=USD';
  result:any;

  constructor(
    private http: HttpClient
    ) { }


    getPrices() {
      return this.http.get(this.url)
      .pipe(map(result => result));
       
   }
}
