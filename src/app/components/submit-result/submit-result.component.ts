import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { JoinPipe } from '../../pipes/join.pipe';

@Component({
  selector: 'app-submit-result',
  standalone: true,
  imports: [DatePipe, JoinPipe],
  templateUrl: './submit-result.component.html',
  styleUrl: './submit-result.component.scss'
})
export class SubmitResultComponent {
  public user: any;

  constructor(private _dialogConfig: DynamicDialogConfig) {}

  public ngOnInit(): void {
    this.user = this._dialogConfig.data?.user;
    console.log(this.user)
  }
}
