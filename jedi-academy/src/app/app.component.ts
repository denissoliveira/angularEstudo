import { Component } from '@angular/core';

@Component({ //< Decorator
  selector: 'jad-root', //nome - para ser usado em outras partes da aplicação
  templateUrl: './app.component.html', //template para definir a aparência. pode ser um tag ex: template: <h1>my component {{title}}</h1>, pode ser em multiplas linhas usando ``
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** o app.component.html consegue vê eles atributos */
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  leia = {name: 'Leia', isJedi: true}
  han = {name: 'Han Solo', isJedi: false}
}

