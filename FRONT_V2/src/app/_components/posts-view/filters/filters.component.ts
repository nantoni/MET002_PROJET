import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from '@app/_models';
import { Store } from '@ngxs/store';
import { DataService } from '@app/_services/data.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  orderList: string[] = [
    'Nearest',
    'Farthest'
  ];
  orderBy: string = this.orderList[0];

  @Output() changeFilter = new EventEmitter<string>();
  @Output() changeGroups = new EventEmitter<number[]>();


  displayGroups: number[] = [];

  // userGroups = [
  //   {
  //     id: 0,
  //     name: 'cnam2018-2021',
  //     description: 'Groupe de la meilleure promo du CNAM',
  //     image: 'src/assets/undraw_code_review_l1q9.svg',
  //     selected: true
  //   },
  //   {
  //     id: 1,
  //     name: 'cnam2017-2020',
  //     description: 'Groupe de la pire promo du CNAM',
  //     image: 'src/assets/undraw_code_review_l1q9.svg',
  //     selected: true
  //   }
  // ];


  userId = -1;

  userGroups: Group[] = [];

  constructor(private store: Store, private dataService: DataService) { }

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
          console.log(this.userGroups);
        });
      });

  }

  order(param: string) {
    this.orderBy = param;
    this.changeFilter.emit(param);
  }

  changeGroup() {
    this.changeGroups.emit(this.displayGroups);
  }


}
