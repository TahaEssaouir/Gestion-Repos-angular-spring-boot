import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CollaborateurService } from "../services/collaborateur.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {
  public collaborateurs : any;
  public dataSource : MatTableDataSource<any> = new MatTableDataSource();
  public matricule: string="";


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private collaborateurService: CollaborateurService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }


  ngOnInit() {
    this.collaborateurService.getAllCollaborateurs(this.collaborateurs)
      .subscribe({
        next: data => {
          this.collaborateurs = data;
          this.dataSource = new MatTableDataSource(this.collaborateurs);
          console.log(data);
          this.dataSource.paginator = this.paginator;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  newCollaborateur() {
    this.router.navigateByUrl('/admin/new-collaborateur');
  }

  deleteCollaborateur(collaborateurs: number) {
    if (confirm("Are you sure you want to delete collaborateur?"))
    this.collaborateurService.deleteCollaborateur(collaborateurs)
      .subscribe({
        next: value => {
          this.collaborateurs = value;
          console.log(value);
        },

      });
    }

  searchCollaborateurs() {
    this.collaborateurService.searchCollaborateurs(this.matricule).subscribe({
      next: value => {
        this.collaborateurs = value;
        }
    })
  }

  handleEdit(collaborateurs: number) {
    this.router.navigateByUrl(`/admin/update-collaborateur/${collaborateurs}`);
  }
}

