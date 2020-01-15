import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { DataService } from '@app/_services/data.service';
import { first } from 'rxjs/operators';
import { Group } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  frmGrp: FormGroup;

  userId: number;

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
      .select(state => state.state.currentUser.userId)
      .subscribe(val => {
        this.userId = val;
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

    let sendGroups: number[] = [];

    this.userGroups.forEach(grp => {
      if (grp.isChecked) {
        sendGroups.push(grp.groupId);
      }
    });

    this.dataService.newPost(
      this.frmGrp.value.title,
      this.frmGrp.value.description,
      this.frmGrp.value.date,
      this.frmGrp.value.location,
      sendGroups,
      this.imagePath)
      .pipe(first())
      .subscribe(
        data => {
          console.log('newpost successful');
          this.router.navigate(['posts']);
        });
  }

}
