import { ContentType } from "@angular/http/src/enums";
import { Component } from "@angular/core";
import { Http } from "@angular/http";

export class Request {
    //Ep = endpoint
    allCoinsEp:string;
    urlPadrao:string;
    constructor(private http: Http){
        
        this.urlPadrao = "https://www.cryptocompare.com";
        
    }

    
}