import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { DataService } from '@app/_services/data.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  frmGrp: FormGroup;

  userId: number;
  user: User;

  userGroups: any[] = [];

  imageList: string[] = [
    'undraw_code_review_l1q9.svg',
    'undraw_coffee_break_j3of.svg',
    'undraw_developer_activity_bv83.svg',
    'undraw_exams_g4ow.svg',
    'undraw_game_day_ucx9.svg',
    'undraw_having_fun_iais.svg',
    'undraw_mello_otq1.svg'
  ];

  imagePath: string;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {

    this.imagePath = this.imageList[Math.floor(Math.random() * Math.floor(7))];

    // Get userId
    this.store
      .select(state => state.state.currentUser)
      .subscribe(val => {
        this.userId = val.userId;
        this.user = val;
        // Get userGroups
        console.log(this.userId);
        this.dataService.getUserGroups(this.userId).pipe(first()).subscribe(groups => {
          this.userGroups = groups.groups;
          console.log(this.userGroups);
        });
      });

    this.frmGrp = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      date: [''],
      location: ['']
    });
  }

  sendEvent() {
    this.dataService.newGroup(
      this.frmGrp.value.title,
      this.frmGrp.value.description,
      this.imagePath)
      .pipe(first())
      .subscribe(
        data => {
          console.log('newgroup successful');
          this.dataService.addUser(this.user.email, data.data.groupId)
          .pipe(first())
          .subscribe(
            data => {
              console.log('addUserByMail successful');
              this.router.navigate(['groups']);
            });
        });
  }

}
