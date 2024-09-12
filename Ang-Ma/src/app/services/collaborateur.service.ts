import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { Collaborateur } from "../model/collaborateur.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  private apiUrll =`${environment.backendHost}/api/Collaborateurs/api/collaborateurs/all`;  // Corrected
  private apiUrl = `${environment.backendHost}/api/Collaborateurs/create`;
  private apiUrlll = `${environment.backendHost}/api/Collaborateurs/delete/`;
  private apiUur  = `${environment.backendHost}/api/Collaborateurs/search?matricule=`;
  private apiUr = `${environment.backendHost}/api/Collaborateurs/update/`;
  //private apiUu = `${environment.backendHost}/api/Collaborateurs/get?matricule=`;


  constructor(private http: HttpClient) {}

  public getAllCollaborateurs(collaborateurs: number): Observable<Array<Collaborateur>> {
    return this.http.get<Array<Collaborateur>>(this.apiUrll);
  }

  public saveCollaborateur(collaborateur: any): Observable<Collaborateur> {
    return this.http.post<Collaborateur>(this.apiUrl, collaborateur, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deleteCollaborateur(collaborateurs: number): Observable<Collaborateur> {
    console.log(this.apiUrlll)
    return this.http.delete<Collaborateur>(`${this.apiUrlll}${collaborateurs}`);
  }

  public searchCollaborateurs(matricule:string): Observable<Array<Collaborateur>> {
    return this.http.get<Array<Collaborateur>>(this.apiUur+matricule);
  }

  updateCollaborateur(collaborateurss: Collaborateur,id: Number):Observable<Collaborateur> {
    return this.http.put<Collaborateur>(`${this.apiUr}${id}`,collaborateurss);
  }
/*
  public getCollaborateurById(matricule: number): Observable<Collaborateur> {
    return this.http.get<Collaborateur>(`${this.apiUu}/${matricule}`);
  }*/
}
