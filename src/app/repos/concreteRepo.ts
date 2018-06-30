import { IRepo } from "./repo";

export class Repo implements IRepo {
    public name: string;
    public url: string;
    public language: string;
    public avatar: string;
    public score: number;
    
    constructor() {
        this.name = ';'
        this.url = '';
        this.language = '';
        this.avatar = '';
        this.score = 0 ;
    }
}