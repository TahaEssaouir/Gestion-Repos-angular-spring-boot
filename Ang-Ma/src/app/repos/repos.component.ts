import { Component, OnInit, ViewChild } from '@angular/core';
import { ReposService } from '../services/repos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import {Repo} from "../model/collaborateur.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public repo: any;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reposService: ReposService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.reposService.getAllRepos(this.repo).subscribe({
      next: data => {
        this.repo = data;
        this.dataSource = new MatTableDataSource(this.repo);
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  newRepos() {
    this.router.navigateByUrl('/admin/new-repos');
  }

  deleteRepos(collaborateurs: number) {
    if (confirm("Are you sure you want to delete repos?")) {
      this.reposService.deleteRepos(collaborateurs)
        .subscribe({
          next: () => {
// Supprimer le dépôt de la liste locale après suppression
            this.repo = this.repo.filter((reposs: Repo) => reposs.collaborateurs !== collaborateurs);
            this.dataSource = new MatTableDataSource(this.repo);
            this.dataSource.paginator = this.paginator; // Réassigner le paginator
          },
          error: error => {
            console.log('Error deleting repo:', error);
          }
        });
    }
  }

  // Fonction pour exporter les données vers un fichier Excel
  exportToExcel(): void {
    // Créer une feuille de calcul à partir des données
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.repo);

    // Créer un nouveau classeur
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    // Ajouter la feuille de calcul au classeur
    XLSX.utils.book_append_sheet(wb, ws, 'Statistiques Repos');

    // Générer un fichier Excel et le télécharger
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Convertir en Blob et déclencher le téléchargement
    this.saveAsExcelFile(excelBuffer, 'statistiques-repos');
  }

  // Fonction pour sauvegarder le fichier Excel
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, `${fileName}.xlsx`);
  }
}
