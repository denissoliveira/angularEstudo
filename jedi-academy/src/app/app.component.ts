import { Component } from '@angular/core';
import {Student} from './student/student.model';

@Component({ //< Decorator
  selector: 'jad-root', //nome - para ser usado em outras partes da aplicação
  templateUrl: './app.component.html', //template para definir a aparência. pode ser um tag ex: template: <h1>my component {{title}}</h1>, pode ser em multiplas linhas usando ``
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [{name: 'Luke', isJedi: true, temple: 'Coruscant'},{name: 'Leia', isJedi: false},{name: 'Han Solo', isJedi: false}];

  /** o app.component.html consegue vê eles atributos */
  //alunos = [{name: 'Luke', isJedi: true, temple: 'Coruscant'},{name: 'Leia', isJedi: false},{name: 'Han Solo', isJedi: false}]
}

