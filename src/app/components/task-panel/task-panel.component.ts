import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit {
  title: object = {
    todo: 'TO DO',
    inProgress: 'IN PROGRESS',
    done: 'DONE'
  };

  idCounter = 0;

  tasks: any = {
    todo: [
      {
        id: 1,
        title: 'Sample Task 1',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 4,
        title: 'Sample Task 4',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 6,
        title: 'Sample Task 6',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 5,
        title: 'Sample Task 5',
        description: 'Sample description of task. Can be longer.'
      }
    ],
    inProgress: [
      {
        id: 2,
        title: 'Sample Task 2' ,
        description: 'Sample description of task. Can be longer.'
      }
    ],
    done: [
      {
        id: 3,
        title: 'Sample Task 3',
        description: 'Sample description of task. Can be longer.'
      }
    ]
  };

  taskPanelList: string[];

  constructor() {
    this.taskPanelList = Object.keys(this.tasks);
  }

  ngOnInit() {}
}
