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
  filter: string;
  coins: Array<Coin>;
  coin: Coin;
  list: Array<string>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    this.allCoinsEp = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
    this.filter = "";
    this.list = [];
    this.coin = new Coin();
    this.coin.Id = "";
    this.coin.Name = "";
    this.coin.Price_Usd = "";
    this.coins = [];
  }

  filterCoins(filter: string) {
    debugger;
    return filter === ""
      ? this.coins
      : this.coins.filter(
          c => c.Name.toLowerCase() === filter || c.Id.toLowerCase() === filter
        );
  }

  requestCoins() {
    this.http.get(this.allCoinsEp).subscribe(
      res => {
        let coin = this.coin;
        let coins = this.coins;
        res.json().map(function(fon) {
          coin.Id = fon.Id;
          coin.Name = fon.Name;
          coin.Price_Usd = fon.price_usd;

          coins.push(this.coin);
        });
      },
      err => {
        console.log(err);
      }
    );
    debugger
    return this.coins;
  }

  private newFunction() {
    coin;
  }
}
