import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/service/crypto-api.service';

@Component({
  selector: 'crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;

  public getAllCryptos: any;
  public filtro: string = "";

  constructor(
    private cryptoApiService : CryptoApiService
  ) { }

  ngOnInit(){
    setInterval(() => {
    this.cryptoApiService.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
    },1000);
  }

  public getSearch(value: string){
    return this.cryptos.filter((res : any) => res.indexOf("BTC") !== -1);
  }


}
