import {Component, NgIterable, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GroupsService} from "../services/groups.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groups : any;

  GrpFormGroup!: FormGroup;
  public dataSource : MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private groupsService: GroupsService,private activatedRoute: ActivatedRoute,private router: Router){}

  ngOnInit() {
    this.groupsService.getAllGroupes()
  }


  newGroups() {

  }
}
