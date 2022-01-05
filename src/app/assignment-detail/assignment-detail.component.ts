import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis?:Assignment;

  constructor(private assignmentsService:AssignmentsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // avant affichage on doit récupérer la valeur du id dans l'URL
    // le "+" force la conversion en number
    const id:number = +this.route.snapshot.params['id'];
    //console.log("ID = " + id);

    // Puis à partir de l'id on demandera au service de nous renvoyer
    // l'assignment correspondant....
    this.assignmentsService.getAssignment(id)
    .subscribe(assignment => {
      this.assignmentTransmis = assignment;
    })
  }

  onAssignmentRendu() {
    if(this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;

      this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      })
    }
  }

  onDelete() {
    // on envoie un evenement au papa
    if(this.assignmentTransmis) {
       this.assignmentsService.deleteAssignment(this.assignmentTransmis)
       .subscribe(message => {
          console.log(message);
        });
        this.assignmentTransmis = undefined;
    }
  }

}
