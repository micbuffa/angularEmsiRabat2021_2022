import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment?:Assignment;
  // champs du formulaire
  nomAssignment?:string;
  dateDeRendu?:Date;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
    // EXEMPLE RECUPERATION PARAMETRES APRES LE ? Et fragment après le #
    // on appelle ces paramètres les "paramètres HTTP" ou encore les
    // query params (dans nodeJS etc.)
    console.log("Query params :");
    console.log(this.route.snapshot.queryParams);
    console.log("Par exemple Nom = " + this.route.snapshot.queryParams['nom']);
    console.log("Le fragment (après le #) : ");
    console.log(this.route.snapshot.fragment);

    // avant affichage on doit récupérer la valeur du id dans l'URL
    // le "+" force la conversion en number
    const id:number = +this.route.snapshot.params['id'];
    //console.log("ID = " + id);

    // Puis à partir de l'id on demandera au service de nous renvoyer
    // l'assignment correspondant....
    this.assignmentsService.getAssignment(id)
    .subscribe(assignment => {
      this.assignment = assignment;
      this.nomAssignment = assignment?.nom;
      this.dateDeRendu = assignment?.dateDeRendu;
    })
  }

  onSaveAssignment() {
    if(!this.assignment) return;

    if(this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    }

    if(this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }


    this.assignmentsService.updateAssignment(this.assignment)
    .subscribe(reponse => {
      console.log("Réponse du serveur : " + reponse.message);

      // on re-affiche la liste
      this.router.navigate(["/home"]);
    })
  }
}
