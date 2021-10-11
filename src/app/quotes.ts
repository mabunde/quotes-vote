export class Quotes {
    public showDescription: boolean;
    constructor(public id: number, public name: string,public author: string,public topic:string,public description: string, public  datePosted: Date,public likes:number,public dislikes:number) {
        this.showDescription = false;
    }
}
