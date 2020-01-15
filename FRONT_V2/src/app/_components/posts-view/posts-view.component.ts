import { Component, OnInit } from '@angular/core';
import { Post, User, Group } from '@app/_models';
import { DataService } from '@app/_services/data.service';
import { first } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {


  // posts = [
  //   {
  //     id: 1,
  //     image: '../../../assets/undraw_mello_otq1.svg',
  //     title: 'Bar Monthly',
  //     description: 'On se retrouve avec le BDE au bar tous les mois',
  //     date: new Date(),
  //     groups: ['cnam2019-2022', 'cnam2018-2021', 'cnam2017-2020']
  //   },
  //   {
  //     id: 2,
  //     image: '../../../assets/undraw_winners_ao2o.svg',
  //     title: '24H du mans ',
  //     description: 'Go représenter le CNAM sur un circuit',
  //     date: new Date(),
  //     groups: ['cnam2018-2021']

  //   }
  // ];



  posts: Post[] = [];

  displayGroups: number[] = [];

  displayPostsIds: number[] = [];

  userId: number;

  loading: boolean = true;

  constructor(private dataService: DataService, private store: Store) { }

  ngOnInit() {
    this.store
      .select(state => state.state.currentUser.userId)
      .subscribe(val => {
        this.userId = val;
        // Get userGroups
        console.log(this.userId);
        // Get posts
        this.dataService.getPosts(this.userId).pipe(first()).subscribe(posts => {
          this.posts = posts;
          this.loading = false;
          this.posts.forEach(routePost => {
            this.dataService.getParticipants(routePost.postId).pipe(first()).subscribe(res => {
              console.log(res);
              res.participations.forEach(participant => {
                if (routePost.participants === undefined) {
                  routePost.participants = [];
                }
                routePost.participants.push(participant.user);
              });
            });
          });
          console.log(posts);
        });
      });

    }



  onChangeFilter(newFilter: string) {
    this.dataService.getPostsSorted(newFilter === 'Farthest' ? true : false, this.userId).pipe(first()).subscribe(posts => {
      this.posts = posts;
      this.posts.forEach(routePost => {
        this.dataService.getParticipants(routePost.postId).pipe(first()).subscribe(res => {
          res.participations.forEach(participant => {
            if (routePost.participants === undefined) {
              routePost.participants = [];
            }
            routePost.participants.push(participant.user);
          });
        });
      });
      console.log(posts);
    });
  }

  onChangeGroups(newGroups: number[]) {

    console.log(newGroups);

    this.displayPostsIds = [];
    this.displayGroups = newGroups;

    this.posts.forEach(poste => {
      poste.groups.forEach(group => {
        this.displayGroups.forEach(displayGroup => {
          if (displayGroup === group.id) {
            this.displayPostsIds.push(poste.postId);
          }
        });
      });
    });

  }

}
