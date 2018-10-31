import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string

  snackVisibility: string = 'hidden'

  constructor(private notificationService : NotificationService) { }

  ngOnInit() { // O subscribe cria um listne , do executa mas não manda o subscribe
    this.notificationService.notifier.do(message => {
      this.message = message
      this.snackVisibility = 'visible'
    }).switchMap(message => Observable.timer(2000))
      .subscribe(timer => this.snackVisibility = 'hidden')
  }
  //switchMap troca o observable, tipo pilha
}
