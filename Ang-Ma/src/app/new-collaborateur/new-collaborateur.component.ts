import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CollaborateurService} from "../services/collaborateur.service";

@Component({
  selector: 'app-new-collaborateur',
  templateUrl: './new-collaborateur.component.html',
  styleUrl: './new-collaborateur.component.css'
})
export class NewCollaborateurComponent implements OnInit {
  collaborateurFormGroup!: FormGroup;
  constructor(private fb : FormBuilder, private collaborateurService: CollaborateurService) {
  }

  ngOnInit() {
    this.collaborateurFormGroup = this.fb.group({
      matricule: ['', Validators.required],    // Champ pour le matricule
      nom: ['', Validators.required],        // Champ pour le nom
      prenom: ['', Validators.required],     // Champ pour le prénom
      terminal: ['', Validators.required],   // Champ pour le terminal
      fonction: ['', Validators.required],   // Champ pour la fonction
      statut: ['', Validators.required],
    });
  }

  saveCollaborateur() {
    const collaborateurData = this.collaborateurFormGroup.value;
    this.collaborateurService.saveCollaborateur(collaborateurData).subscribe({
        next: value => {
          alert("Collaborateur saved successfully");
        },
        error: err => {
          console.log(err);
        }
      });
  }
}
