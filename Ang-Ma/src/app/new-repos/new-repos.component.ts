import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReposService} from "../services/repos.service";

@Component({
  selector: 'app-new-repos',
  templateUrl: './new-repos.component.html',
  styleUrl: './new-repos.component.css',

})
export class NewReposComponent implements OnInit {
  reposFormGroup!: FormGroup;
  constructor(private fb: FormBuilder,private reposService: ReposService,) {
  }

  ngOnInit() {
    this.reposFormGroup=this.fb.group({
      collaborateurs: ['', Validators.required],
      nom: ['', Validators.required],
      matricule: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      terminal: ['', Validators.required],
      fonction: ['', Validators.required],
      codeGroupe: ['', Validators.required],
      typeRepos: ['', Validators.required],
    })
  }

  saveRepos() {
    const reposData = (this.reposFormGroup.value);
    this.reposService.saveRepos(reposData).subscribe({
      next: value => {
        alert("Repos saved successfully");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
