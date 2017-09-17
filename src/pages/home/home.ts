import { ContentType } from "@angular/http/src/enums";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { Http } from "@angular/http";
import { Coin } from "../../models/coin";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  allCoinsEp: string;
  filter: string = ''
  coins: Array<Coin>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    this.allCoinsEp = "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=5"
    
    this.coins = []
    this.requestCoins() 
  }

  filterCoins(filter){
    filter = filter.toLowerCase()
    return filter === ''
    ? this.coins
    : this.coins.filter(coin => {
       coin.name.toLowerCase().indexOf(filter) !== -1 
       || coin.id.toLowerCase().indexOf(filter) !== -1;
    })
  }


  requestCoins() {
    this.http.get(this.allCoinsEp)
    .subscribe(
      res => {
        let coinsAux:Array<Coin> = []
        res.json().map(function(fon){
          let coin = new Coin();
          coin.id = fon.id
          coin.name = fon.name
          coin.priceUsd = fon.price_usd
          coin.priceBrl = fon.price_brl
          /* coin.volBrl = fon.24h_volume_brl */
          coin.percent1h = fon.percent_change_1h
          coin.percent24h = fon.percent_change_24h
          coin.symbol = fon.symbol
          coinsAux.push(coin)
        });
        this.coins = coinsAux
      },
      err => {
        console.log(err);
      }
    );   
  }  
}
