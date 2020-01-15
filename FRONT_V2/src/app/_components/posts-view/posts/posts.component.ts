import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Group, User } from '@app/_models';
import { Store } from '@ngxs/store';
import { DataService } from '@app/_services/data.service';
import { AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() postTitle: string;
  @Input() postDescription: string;
  @Input() postDate: Date;
  @Input() postLocation: string;
  @Input() postImage: string;
  @Input() postId: number;
  @Input() postGroups: Group[];
  @Input() postParticipants: User[];


  constructor(private store: Store, private dataService: DataService, private alertService: AlertService) { }

  user: User;
  participating: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (this.postParticipants) {
      this.postParticipants.forEach(element => {
        if (element.userId === this.user.userId) {
          this.participating = true;
        }
      });
    }
  }

  ngOnInit() {
    this.store
      .select(state => state.state.currentUser)
      .subscribe(val => (this.user = val));

  }

  illBeThere(postId: number) {
    // If already participating
    if (this.participating) {
      this.dataService.participe(this.user.userId, postId, false)
        .pipe(first())
        .subscribe(
          data => {
            this.participating = false;
            console.log('illbethere update successful');
            this.postParticipants.splice(this.postParticipants.indexOf(this.user), 1);
          },
          error => {
            this.alertService.error(error);
          });
    } else {
      this.dataService.participe(this.user.userId, postId, true)
        .pipe(first())
        .subscribe(
          data => {
            this.participating = true;
            console.log('illbethere successful');
            if (this.postParticipants === undefined) {
              this.postParticipants = [];
            }
            this.postParticipants.push(this.user);
          },
          error => {
            this.alertService.error(error);
          });
    }


  }

}
