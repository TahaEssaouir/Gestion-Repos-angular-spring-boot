import {Component, OnInit, ViewChild} from '@angular/core';
import {ReposService} from "../services/repos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Repo} from "../model/collaborateur.model";


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent implements OnInit {
// public repo: (NgIterable<unknown> & NgIterable<any>) | undefined | null
  //public dataSource :(NgIterable<unknown> & NgIterable<any>) | undefined | null;
  public repo: any;
  public dataSource : MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reposService: ReposService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.reposService.getAllRepos(this.repo)
      .subscribe({
        next: data => {
          this.repo = data;
          this.dataSource = new MatTableDataSource(this.repo);
          console.log(data);
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

/*
  deleteRepos(repo: any) {
    if (confirm("Are you sure you want to delete repos?"))
      this.reposService.deleteRepos(repo)
        .subscribe({
          next: value => {
            this.repo = value;
            console.log(value);
          },

        });
  }*/
}
