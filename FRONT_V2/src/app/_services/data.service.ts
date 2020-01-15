import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Post } from '@app/_models';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) { }

  getPosts(userId: number) {
    return this.http.get<any>(`${environment.apiUrl}/posts?after=2019-12-11&userId=${userId}`)
      .pipe(map(val => {

        val.data.posts.forEach(post => {
          post.postGroups.forEach(group => {
            if (post.groups === undefined) {
              post.groups = [];
            }
            post.groups.push({
              id: group.group.groupId,
              name: group.group.name,
              description: group.group.description,
              image: group.group.image
            });
          });
        });

        return val.data.posts;
      }));
  }

  getPostsSorted(reverse: boolean, userId: number) {
    return this.http.get<any>(`${environment.apiUrl}/posts?after=2019-12-11&order=date&reverse=${reverse}&userId=${userId}`)
      .pipe(map(val => {

        val.data.posts.forEach(post => {
          post.postGroups.forEach(group => {
            if (post.groups === undefined) {
              post.groups = [];
            }
            post.groups.push({
              id: group.group.groupId,
              name: group.group.name,
              description: group.group.description,
              image: group.group.image
            });
          });
        });

        return val.data.posts;
      }));
  }

  getUserGroups(userId: number) {
    return this.http.get<any>(`${environment.apiUrl}/groups?userId=${userId}`)
      .pipe(map(val => {
        return val.data;
      }));
  }

  getParticipants(postId: number) {
    return this.http.get<any>(`${environment.apiUrl}/participations?enabled=true&include=user&postId=${postId}`)
      .pipe(map(val => {
        return val.data;
      }));
  }

  getGroupMembers(groupId: number) {
    return this.http.get<any>(`${environment.apiUrl}/users?groupId=${groupId}`)
      .pipe(map(val => {
        return val.data.users;
      }));
  }

  addUser(mail: string, groupId: number) {
    return this.http.post<any>(`${environment.apiUrl}/users/${mail}/subscribe/${groupId}`, { })
      .pipe();
  }

  quitGroupe(userId: number, groupId: number) {
    return this.http.post<any>(`${environment.apiUrl}/users/${userId}/unsubscribe/${groupId}`, {})
      .pipe();
  }

  participe(userId: number, postId: number, enabled: boolean) {
    return this.http.post<any>(`${environment.apiUrl}/participations`, { userId, postId, enabled })
      .pipe();
  }

  newPost(title: string, description: string, date: Date, location: string, groups: number[], image: string) {
    return this.http.post<any>(`${environment.apiUrl}/posts`, { title, description, date, location, groups, image })
      .pipe();
  }

  newGroup(name: string, description: string, image: string) {
    return this.http.post<any>(`${environment.apiUrl}/groups`, { name, description, image })
      .pipe();
  }

}
