import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student /**componente tem uma tag chamada student do tipo Student , que recebe um valor usado em student.component.html */

  constructor() { }

  ngOnInit() {
  }

}
