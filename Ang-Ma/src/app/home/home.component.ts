import {Component, NgIterable, OnInit} from '@angular/core';
import {Collaborateur} from "../model/collaborateur.model";
import {CollaborateurService} from "../services/collaborateur.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private collaborateurService: CollaborateurService,) {}

  ngOnInit(): void {
  }
}
