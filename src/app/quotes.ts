export class Quotes {
    public showDescription:boolean
    constructor(public id:number, 
        public name:string, 
        public auther:string, 
        public username:string,
        public upvote:number, 
        public downvote:number,
        public completeDate:Date)
    {

       this.showDescription=false
    }
       
}
