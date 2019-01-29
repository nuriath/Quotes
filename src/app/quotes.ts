export class Quotes {
    public showDescription:boolean
    constructor(public id:number, 
        public quote:string, 
        public author:string, 
        public username:string,
        public upvote:number, 
        public downvote:number,
        public completeDate:Date)
    {

       this.showDescription=false
    }
       
}
