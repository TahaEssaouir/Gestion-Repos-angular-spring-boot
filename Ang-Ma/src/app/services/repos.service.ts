import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Collaborateur, Repo} from "../model/collaborateur.model";

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private apiUrl = `${environment.backendHost}/api/Repos/create?collaborateurs=&dateDebut=&dateFin=&terminal=&fonction=&typeRepos=`;
  private apiUrllll = `${environment.backendHost}/api/Repos/delete/`;


  constructor(private http: HttpClient) { }

   public getAllRepos(repo: any):Observable<Repo[]> {
    return this.http.get<Repo[]>(`${environment.backendHost}/api/Repos/groupes/all`);
    }
/*
  public saveCollaborateur(collaborateur: any): Observable<Collaborateur> {
    return this.http.post<Collaborateur>(this.apiUrl, collaborateur, {
      headers: { 'Content-Type': 'application/json' }
    });
  } */

  public saveRepos(repo: any):Observable<Repo[]> {
    return this.http.post<Repo[]>(this.apiUrl, repo);
  }

  public deleteRepos(collaborateurs: number): Observable<any> {
    return this.http.delete(`${this.apiUrllll}${collaborateurs}`);
  }


  /*
    public deleteRepos(repo: any):Observable<Repo[]> {
      console.log(this.apiUrllll);
      return this.http.delete<Repo[]>(`${this.apiUrllll}${repo}`);
    } */
}
