import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(nomAssignment:string, action:string) {
    // par exemple, affiche "assignment Devoir Buffa supprimé"
    console.log(`LOGGING SERVICE: ${nomAssignment} ${action}`)
  }
}
