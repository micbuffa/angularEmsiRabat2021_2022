import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignmentSelectionne?:Assignment = undefined;

  assignments:Assignment[] = [
    {
      id:1,
      nom:"Devoir Angular proposé par Mr Buffa",
      dateDeRendu: new Date("2022-01-23"),
      rendu : false
    },
    {
      id:2,
      nom:"Devoir gestion de projet de Mr Winter",
      dateDeRendu: new Date("2022-01-10"),
      rendu : false
    },
    {
      id:3,
      nom:"Devoir Hybride de Mr Pascal Bohn",
      dateDeRendu: new Date("2021-11-01"),
      rendu : true
    }
  ]

  constructor(private loggingService: LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    // imaginons qu'on envoie une requête dans le cloud
    // et que le serveur à son tour envoie une requête sur une BD
    // dans le cloud... on en sait pas exactement combien de temps
    // cela va prendre....
    // On va donc non pas renvoyer les données, mais plutôt un objet "observable".
    //
    return of(this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    let assignment;
    assignment = this.assignments.find(a => a.id === id);
    
    return of(assignment);
  }

  addAssignment(assignment:Assignment):Observable<String> {
    this.assignments.push(assignment);

    this.loggingService.log(assignment.nom, "Ajouté");

    return of("Service : assignment ajouté avec succès");
  }

  updateAssignment(assignment:Assignment):Observable<String> {
    // POUR LE MOMENT RIEN BESOIN DE FAIRE

    // Par la suite, on enverra une requête PUT dans le cloud
    // pour faire un update dans le base de données distante
    this.loggingService.log(assignment.nom, "Modifié");

    return of("Service : assignment modifié avec succès");
  }

  deleteAssignment(assignment:Assignment):Observable<String> {
    const position = this.assignments.indexOf(assignment);
    const nombreElementsASupprimer = 1;

    this.assignments.splice(position, nombreElementsASupprimer);

    this.loggingService.log(assignment.nom, "Supprimé");

    return of("Service : assignment supprimé avec succès");
  }
}
