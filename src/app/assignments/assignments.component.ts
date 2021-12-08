import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Liste des assignments";
  assignments = [
    {
      nom:"Devoir Angular proposé par Mr Buffa",
      dateDeRendu: "2022-01-23",
      rendu : false
    },
    {
      nom:"Devoir gestion de projet de Mr Winter",
      dateDeRendu: "2022-01-10",
      rendu : false
    },
    {
      nom:"Devoir Hybride de Mr Pascal Bohn",
      dateDeRendu: "2021-11-01",
      rendu : true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
