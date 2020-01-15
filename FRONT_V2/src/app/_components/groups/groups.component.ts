import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DataService } from '@app/_services/data.service';
import { first } from 'rxjs/operators';
import { Group, User } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private store: Store,
    private dataService: DataService,
    private router: Router) { }

  userId: number;

  user: User;

  userGroups: any[];

  ngOnInit() {
    // Get userId
    this.store
      .select(state => state.state.currentUser.userId)
      .subscribe(val => {
        this.userId = val;
        // Get userGroups
        console.log(this.userId);
        this.dataService.getUserGroups(this.userId).pipe(first()).subscribe(groups => {
          this.userGroups = groups.groups;
          this.userGroups.forEach(group => {
            this.dataService.getGroupMembers(group.groupId).pipe(first()).subscribe(members => {
              group.members = members;
            });
          });
        });
      });
  }

  addUserByMail(groupId: number, mail: string) {
    this.dataService.addUser(mail, groupId)
      .pipe(first())
      .subscribe(
        data => {
          console.log('addUserByMail successful');
          // Get userGroups
          console.log(this.userId);
          this.dataService.getUserGroups(this.userId).pipe(first()).subscribe(groups => {
            this.userGroups = groups.groups;
            this.userGroups.forEach(group => {
              this.dataService.getGroupMembers(group.groupId).pipe(first()).subscribe(members => {
                group.members = members;
              });
            });
          });
        });
  }

  quitGroup(groupId: number) {
    this.dataService.quitGroupe(this.userId, groupId)
      .pipe(first())
      .subscribe(
        data => {
          console.log('quitGroupe successful');
          // Get userGroups
          console.log(this.userId);
          this.dataService.getUserGroups(this.userId).pipe(first()).subscribe(groups => {
            this.userGroups = groups.groups;
            this.userGroups.forEach(group => {
              this.dataService.getGroupMembers(group.groupId).pipe(first()).subscribe(members => {
                group.members = members;
              });
            });
          });
        });
  }

}
