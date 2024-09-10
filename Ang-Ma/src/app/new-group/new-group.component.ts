import {Component, NgIterable, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent   {
  constructor(private http: HttpClient, private router: Router) {}


  groupeDto = {
    terminal: '',
    fonction: '',
    groupeA: '',
    groupeB: '',
    groupeC: ''
  };
/*
  onSubmit(){
    this.router.navigateByUrl('/admin/new-group');
  }*/


  onSubmit() {
    this.http.post('/api/groupes/creer', this.groupeDto).subscribe({
      next: () => this.router.navigate(['/groupes']),
      error: (error) => console.error('Erreur lors de la création du groupe', error)
    });
  }
}
