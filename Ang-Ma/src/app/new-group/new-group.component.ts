import {Component, NgIterable, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GroupsService} from "../services/groups.service";


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent implements OnInit{
  groupFormGroup!: FormGroup;
  constructor(private fbG : FormBuilder,private groupsService : GroupsService) {}

  ngOnInit() {
    this.groupFormGroup = this.fbG.group({
      collaborateurs: ['', Validators.required],
      terminal: ['', Validators.required],
      fonction: ['', Validators.required],
      codeGroupe: ['', Validators.required],
    });
  }

  createGroup() {
    const groupData = this.groupFormGroup.value;
    this.groupsService.createGroup(groupData).subscribe({
      next: value => {
        alert("Groups saved successfully");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}


