import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CollaborateurService } from '../services/collaborateur.service';
import { GroupsService } from '../services/groups.service';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalCollaborateurs: number = 0;
  totalGroupes: number = 0;
  totalRepos: number = 0;

  collaboratorsChart: any;
  reposChart: any;

  constructor(
    private collaborateurService: CollaborateurService,
    private groupsService: GroupsService,
    private reposService: ReposService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getStatistics();
    this.createCollaboratorsChart();
    this.createReposChart();
  }

  getStatistics(): void {
    this.collaborateurService.getAllCollaborateurs(0).subscribe(collaborateurs => {
      this.totalCollaborateurs = collaborateurs.length;
    });

    this.groupsService.getAllGroupes(0).subscribe(groups => {
      this.totalGroupes = groups.length;
    });

    this.reposService.getAllRepos(null).subscribe(repos => {
      this.totalRepos = repos.length;
    });
  }

  createCollaboratorsChart() {
    const ctx = document.getElementById('collaboratorsChart') as HTMLCanvasElement;

    this.collaboratorsChart = new Chart(ctx, {
      type: 'bar', // Bar chart for collaborators
      data: {
        labels: ['Groupe A', 'Groupe B', 'Groupe C'], // Example data, replace with actual groups
        datasets: [{
          label: 'Collaborateurs par Groupe',
          data: [50, 50, 50], // Example data, replace with dynamic data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createReposChart() {
    const ctx = document.getElementById('reposChart') as HTMLCanvasElement;

    this.reposChart = new Chart(ctx, {
      type: 'pie', // Pie chart for repos by type
      data: {

        labels: ['Repos Mensuel', 'Repos Maladie', 'Repos Sans Solde'], // Example labels
        datasets: [{
          label: 'Types de Repos',
          data: [3, 1, 1], // Example data, replace with dynamic data
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
