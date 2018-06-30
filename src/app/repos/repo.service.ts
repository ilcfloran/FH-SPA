import { Injectable } from "@angular/core";
import { IRepo } from "./repo";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RepoService {
    
    // Note: Replcase your Client_id and client_secret in _tailUrl

    private _baseUrl = 'https://api.github.com/search/repositories?q='
    private _tailUrl = '';
    private _apiUrl: string;

    constructor(private _http: HttpClient) {}

    getRepos(filter: string): Observable<IRepo[]> {
        this._apiUrl = this._baseUrl + filter + this._tailUrl;
        return this._http.get<IRepo[]>(this._apiUrl);
    }
}