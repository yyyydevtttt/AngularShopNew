import { Injectable } from '@angular/core';
import { Issue } from "./issue";

@Injectable()
export class IssueService {

  private issues: Issue[];

  public add(issue: Issue): void {
   this.issues.push(issue); 
  }

  public delete(index: number): void {
    this.issues.splice(index, 1);
  }

  public getlist(): Issue[] {
    return this.issues;
  }
}
