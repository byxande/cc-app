export class Coins {
    public Id:number;
    public Name:string;
    public ImgUrl?:string;
    constructor(id, name, imgUrl) {
        this.Id = id;
        this.Name = name;
        this.ImgUrl = imgUrl;
      }
  }