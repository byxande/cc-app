import { ContentType } from "@angular/http/src/enums";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import {
  Http
} from "@angular/http";
import {Request} from "../../util/requests";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  allCoinsEp: string;
  priceUrl: string;
  coinsList: Array<Object>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    this.allCoinsEp = "https://www.cryptocompare.com/api/data/coinlist/";
    this.priceUrl ="https://min-api.cryptocompare.com/data/price";
  }

getAllCoins(){  
  this.http.get(this.allCoinsEp)
  .subscribe(
    res => {
      console.log(res.json().Data);
      
      debugger;
      /* this.coinsList.push(res.json().Data)
      return this.coinsList.slice(0,10); */
    },
    err => {
      console.log(err);
    }
  );
}

getPrice(coin, toCoins){
  let params: URLSearchParams = new URLSearchParams();
  params.set('fsym', coin);
  params.set('tsym', toCoins);
  this.http.get(this.priceUrl,{
    search:params
  })
  .subscribe(
    res => {      
      console.log();
      debugger;
      this.coinsList.push(res.json().Data)
    },
    err => {
      console.log(err);
    }
  );
}
 /*  coinsFilter(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coinsList = this.coinsList.filter((coin) => {
        return (coin.indexOf(val.toLowerCase()) > -1);
      })
    }
  } */

  /*  coinClick() {
    let loading = this.loadingCtrl.create({
      content: 'Um momento...'
    });
    loading.present();

    this.http.get( this.requestUrl, {     
    }).subscribe(
      data => {
        let coinJson = data.json();
          if(coinJson.Response === "Success"){
            this.coinsDict[coinJson.CoinName] = {Id: coinJson.Id, Name: coinJson.Name, ImgUrl: coinJson.ImageUrl};
            return  this.coinsDict;
          }
      },
      err => {        
        console.log(err);
      });
      loading.dismiss();
  } */
}
