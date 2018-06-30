import {Component} from '@angular/core';
import { IRepo } from './repo';
import { Repo } from './concreteRepo';
import { RepoService } from './repo.service';

@Component({
    selector: 'fh-repos',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.css']
})

export class RepoListComponent{
    searchTitle: string;
    showImage: boolean = false;
    private _repoService;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        // this.filteredRepos = this.listFilter ? this.performFilter(this.listFilter) : this.repos;
    }

    filteredRepos: IRepo[];
    repos: IRepo[] = [];

    constructor(repoService: RepoService) {
        this._repoService = repoService;
    }

    // performFilter(filterBy: string): IRepo[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.repos.filter((repo: IRepo) => repo.language.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    // }

    searchRipository() {
        if(this.listFilter) {
            this.repos = this._repoService.getRepos(this.listFilter).subscribe(
                repos => {
                    //console.log(repos.items);
                    this.repos = [];
                    for(let element of repos.items) {
                        var repoitem = new Repo();
                        repoitem.name = element.name;
                        repoitem.url = element.html_url;
                        repoitem.language = element.language;
                        repoitem.avatar = element.owner.avatar_url;
                        repoitem.score = element.score;
                        this.repos.push(repoitem);                    
                    }
                    this.filteredRepos = this.repos;
                }, error => {
                    console.log("Error accured while fetching data from the API.");
                }
            );
        }else{
            this.filteredRepos = [];
        }
    }
}