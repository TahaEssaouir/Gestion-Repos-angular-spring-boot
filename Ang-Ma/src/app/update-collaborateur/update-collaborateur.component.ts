import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CollaborateurService } from "../services/collaborateur.service";
import { ActivatedRoute } from '@angular/router';
import {Collaborateur} from "../model/collaborateur.model";

@Component({
  selector: 'app-update-collaborateur',
  templateUrl: './update-collaborateur.component.html',
  styleUrls: ['./update-collaborateur.component.css']
})
export class UpdateCollaborateurComponent implements OnInit {
  collaborateurFormGroup!: FormGroup;
  collaborateurs!: number;

  constructor(private fb: FormBuilder,
              private collaborateurService: CollaborateurService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.collaborateurs = this.route.snapshot.params['collaborateurs'];// Récupérer l'ID du collaborateur
    this.collaborateurService.getCollaborateurById(this.collaborateurs).subscribe({
      next: (collaborateurss) => {
        this.collaborateurFormGroup=this.fb.group({
          collaborateurs: this.fb.control(collaborateurss.collaborateurs, Validators.required),// Champ pour le collaborateurs
          matricule: ['', Validators.required],    // Champ pour le matricule
          nom: ['', Validators.required],        // Champ pour le nom
          prenom: ['', Validators.required],     // Champ pour le prénom
          terminal: ['', Validators.required],   // Champ pour le terminal
          fonction: ['', Validators.required],   // Champ pour la fonction
          statut: ['', Validators.required],
        })
      },
      error: error => {
        console.log(error);
      }
    });
  }
/*
  getCollaborateurById() {
    this.collaborateurService.getCollaborateurById(this.collaborateurs).subscribe({
      next: value => {
        this.collaborateurs = value;
      }
    })
  }*/

  updateCollaborateur() {
    this.collaborateurs = this.route.snapshot.params['collaborateurs'];// Récupérer l'ID du collaborateur
    let collaborateurss : Collaborateur = this.collaborateurFormGroup.value;
    this.collaborateurService.updateCollaborateur(collaborateurss,this.collaborateurs).subscribe({
      next: value => {
        alert("Collaborateur saved successfully");
      },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}

