import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignmentSelectionne?:Assignment = undefined;

  assignments:Assignment[] = [];

  constructor(private loggingService: LoggingService, private http:HttpClient) { }

  //url = "http://localhost:8010/api/assignments";
  url = "https://api-emsi-rabat-2022.herokuapp.com/api/assignments";

  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url + "/" + id)
    .pipe(
      tap(a => {
        console.log("tap : " + a.nom)
      }),
      catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id + " a échoué"))
    );
  }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    }
 };

  addAssignment(assignment:Assignment):Observable<any> {
    this.loggingService.log(assignment.nom, "Ajouté");

    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    this.loggingService.log(assignment.nom, "Modifié");
    return this.http.post<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    this.loggingService.log(assignment.nom, "Supprimé");
    return this.http.delete(this.url + "/" + assignment._id);
  }
}
