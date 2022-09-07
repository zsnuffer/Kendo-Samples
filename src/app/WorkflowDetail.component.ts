import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'workflow',
  templateUrl: './WorkflowDetail.component.html',
  styles: [
    `
    workflow {
        height: 900px;
        display:flex;
        flex-direction: row;
        }
        .spacer {display:flex; flex:1; flex-direction: column}
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WorkFlowDetailComponent {
  public StartDate: Date = new Date('4/1/2022');
  public EndDate: Date = new Date('6/7/2022');
  public gridData: StaffTaskList[] = [
    {
      ID: 1,
      Step: 'File for Candidacy',
      Status: 'Complete',
      DueDate: new Date('04/10/2022'),
      CompletedDate: new Date('04/06/2022'),
    },
    {
      ID: 2,
      Step: 'Send Instructions to Candidate',
      Status: 'Completed',
      DueDate: new Date('04/10/2022'),
      CompletedDate: new Date('04/5/2022'),
    },
    {
      ID: 3,
      Step: 'Filing Fee Payement',
      Status: 'Open',
      DueDate: new Date('04/10/2022'),
      CompletedDate: null,
    },
    {
      ID: 4,
      Step: 'Petition Filed',
      Status: 'N/A',
      DueDate: null,
      CompletedDate: null,
    },
    {
      ID: 5,
      Step: 'Treasurer Form Filed',
      Status: 'Open',
      DueDate: new Date('04/15/2022'),
      CompletedDate: null,
    },
    {
      ID: 6,
      Step: 'Campaign Finance Reminder',
      Status: null,
      DueDate: new Date('05/10/2022'),
      CompletedDate: null,
    },
    {
      ID: 7,
      Step: 'Campaign Finance Forms Filed',
      Status: null,
      DueDate: new Date('05/10/2022'),
      CompletedDate: null,
    },
  ];

  public stepList: Array<string> = ['Treasurer Form Filed'];
}

class StaffTaskList {
  ID: number;
  Step: string;
  Status: string;
  DueDate: Date;
  CompletedDate: Date;
}
