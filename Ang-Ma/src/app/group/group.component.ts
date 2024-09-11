import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupsService} from "../services/groups.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {Groups} from "../model/collaborateur.model";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groups : any;
  public dataSource : MatTableDataSource<any> = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private groupsService: GroupsService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}

  ngOnInit() {
    this.groupsService.getAllGroupes(this.groups)
      .subscribe({
      next: data => {
        this.groups = data;
        this.dataSource = new MatTableDataSource(this.groups);
        console.log(data);
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
       console.log(error);
      }
    });
  }


  newGroups() {
    this.router.navigateByUrl('/admin/new-group');
  }


  deleteGroups(collaborateurs: number) {
    if (confirm("Are you sure you want to delete Groupes?")) {
      this.groupsService.deleteGroups(collaborateurs)
        .subscribe({
          next: () => {
            // Supprimer le dépôt de la liste locale après suppression
            this.groups = this.groups.filter((groupess: Groups) => groupess.collaborateurs !== collaborateurs);
            this.dataSource = new MatTableDataSource(this.groups);
            this.dataSource.paginator = this.paginator; // Réassigner le paginator
          },
          error: error => {
            console.log('Error deleting Groupes:', error);
          }
        });
    }
  }

}
