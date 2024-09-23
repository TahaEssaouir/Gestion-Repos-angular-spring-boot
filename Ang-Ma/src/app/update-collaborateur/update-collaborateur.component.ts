import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CollaborateurService } from "../services/collaborateur.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborateur } from "../model/collaborateur.model";

@Component({
  selector: 'app-update-collaborateur',
  templateUrl: './update-collaborateur.component.html',
  styleUrls: ['./update-collaborateur.component.css']
})
export class UpdateCollaborateurComponent implements OnInit {
  collaborateurFormGroupp!: FormGroup;
  currentCollaborateur!: Collaborateur;

  constructor(
    private fb: FormBuilder,
    private collaborateurService: CollaborateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with the necessary form controls and validations

    this.collaborateurFormGroupp = this.fb.group({
      collaborateurs: ['', Validators.required],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      terminal: ['', Validators.required],
      fonction: ['', Validators.required],
      statut: ['', Validators.required]
    });

    // Fetch the Collaborateur data by ID
    const id = this.route.snapshot.paramMap.get('id'); // Get the id from the route
    if (id) {
      this.getCollaborateurById(id); // Fetch the data and populate the form
    }
  }

  // Method to fetch Collaborateur by ID
  getCollaborateurById(id: string): void {
    this.collaborateurService.getCollaborateurById(id).subscribe({
      next: (data) => {
        this.currentCollaborateur = data;
        this.collaborateurFormGroupp.patchValue(this.currentCollaborateur);  // Populate the form with the data
      },
      error: (err) => {
        console.error('Error fetching collaborateur:', err);
      }
    });
  }

  // Method to update the Collaborateur details
  collaborateurss: any;
  updateCollaborateur(collaborateurss: any): void {
    if (this.collaborateurFormGroupp.valid) {
      this.collaborateurService.updateCollaborateur(this.currentCollaborateur.collaborateurs, this.collaborateurFormGroupp.value).subscribe({
        next: () => {
          console.log('Collaborateur updated successfully');
          this.router.navigate(['/collaborateurs']);  // Navigate back to the list page
        },
        error: (err) => {
          console.error('Error updating collaborateur:', err);
        }
      });
    }
  }
}
