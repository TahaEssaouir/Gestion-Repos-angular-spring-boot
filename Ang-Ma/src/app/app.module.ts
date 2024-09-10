import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { GroupComponent } from './group/group.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {CdkListbox} from "@angular/cdk/listbox";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { NewCollaborateurComponent } from './new-collaborateur/new-collaborateur.component';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import { UpdateCollaborateurComponent } from './update-collaborateur/update-collaborateur.component';
import { NewGroupComponent } from './new-group/new-group.component';
import {ReposComponent} from "./repos/repos.component";
import { NewReposComponent } from './new-repos/new-repos.component';
import {MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {AuthGuard} from "./guards/auth.guard";
import { DragDropModule} from "@angular/cdk/drag-drop";





@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    DashboardComponent,
    CollaborateurComponent,
    GroupComponent,
    ReposComponent,
    NewCollaborateurComponent,
    UpdateCollaborateurComponent,
    NewGroupComponent,
    NewReposComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatCheckbox,
    FormsModule,
    MatIcon,
    MatToolbar,
    MatButton,
    MatMenu,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    DragDropModule,
  ],
  providers: [
    provideAnimationsAsync(),//AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
