import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  // Pour la communication, entre autres, avec le composant père
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // pour le formulaire
  nomAssignment:string = "";
  dateDeRendu?:Date = undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dateDeRendu);

    if(this.nomAssignment && this.dateDeRendu) {
      let newAssignment = new Assignment();

      newAssignment.nom = this.nomAssignment;
      newAssignment.dateDeRendu = this.dateDeRendu;
      newAssignment.rendu = false;

      //this.assignments.push(nouvelAssignment);
      // on envoie un événement à l'extérieur (et dans notre cas, le composant père
      // va l'écouter), et cet événement a pour valeur le nouvel assignment que
      // l'on veut ajouter
      this.nouvelAssignment.emit(newAssignment)
    }
  }

}
