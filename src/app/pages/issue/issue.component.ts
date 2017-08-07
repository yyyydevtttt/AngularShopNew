import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';
import { IssueService } from "./issue.service";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private issue: Issue;
  private issues: Issue[];

  constructor(
    private issueService: IssueService
  ) {}

  ngOnInit() {
    this.issue = new Issue;
    this.issues = this.issueService.getlist();
  }

  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }
    this.issueService.add(issue);
    form.reset;
  }

  public onDelete(index: number): void {
    this.issueService.delete(index);
  }

}
