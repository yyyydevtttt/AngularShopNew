import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issue: Issue;
  issues: Issue[];

  constructor() {}

  ngOnInit() {
    this.issue = new Issue;
    this.issues = []
  }

  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }
    this.issues.push(issue);
    form.reset;
  }

  public onDelete(index: number): void {
    this.issues.splice(index, 1);
  }

}
