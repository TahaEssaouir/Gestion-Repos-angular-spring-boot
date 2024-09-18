import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CollaborateurComponent} from "./collaborateur/collaborateur.component";
import {GroupComponent} from "./group/group.component";
import {ReposComponent} from "./repos/repos.component";
import {NewCollaborateurComponent} from "./new-collaborateur/new-collaborateur.component";
import {UpdateCollaborateurComponent} from "./update-collaborateur/update-collaborateur.component";
import {NewGroupComponent} from "./new-group/new-group.component";
import {NewReposComponent} from "./new-repos/new-repos.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminTemplateComponent ,
  canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'collaborateur', component: CollaborateurComponent},
      {path: 'group', component: GroupComponent},
      {path: 'repos', component: ReposComponent},
      {path: 'new-collaborateur', component: NewCollaborateurComponent},
      { path: 'update-collaborateur/:collaborateurs', component: UpdateCollaborateurComponent },
      {path: 'new-group', component: NewGroupComponent},
      {path: 'new-repos', component: NewReposComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
