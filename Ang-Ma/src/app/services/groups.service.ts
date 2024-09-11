import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Groups} from "../model/collaborateur.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private apiUrll =`${environment.backendHost}/api/groupes/all`;
  private apiUrl =`${environment.backendHost}/api/groupes/create`;
  private apiU = `${environment.backendHost}/api/groupes/delete/`;

  constructor(private http: HttpClient) { }


 public getAllGroupes(groups:number):Observable<Array<Groups>> {
   return this.http.get<Array<Groups>>(this.apiUrll);
  }

   public createGroup(groupData: any):Observable<Groups> {
     return this.http.post<Groups>(this.apiUrl, groupData, {
       headers: { 'Content-Type': 'application/json' }
     });
   }

  public deleteGroups(collaborateurs: number): Observable<any> {
    return this.http.delete(`${this.apiU}${collaborateurs}`);
  }

}
