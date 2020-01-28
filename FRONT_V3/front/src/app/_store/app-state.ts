import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StateModel } from './state-model';
import { SetCurrentUser, SetOrderBy, AddOrderGroup, DelOrderGroup } from './actions';
import { User } from '@app/_models';

@State<StateModel>({
  name: 'state',
  defaults: {
    currentUser: new User(),
    orderBy: 'Nearest',
    orderGroups: []
  }
})
export class AppState {

  @Selector()
  static getCurrentUser(state: StateModel) {
    return state.currentUser;
  }

  @Selector()
  static getOrderBy(state: StateModel) {
    return state.orderBy;
  }

  @Selector()
  static getOrderGroups(state: StateModel) {
    return state.orderGroups;
  }

  @Action(SetCurrentUser)
  SetCurrentUser(
    { patchState }: StateContext<StateModel>,
    { payload }: SetCurrentUser
  ) {
    patchState({ currentUser: payload });
  }

  @Action(SetOrderBy)
  SetOrderBy(
    { patchState }: StateContext<StateModel>,
    { payload }: SetOrderBy
  ) {
    patchState({ orderBy: payload });
  }

  @Action(AddOrderGroup)
  AddOrderGroup(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: AddOrderGroup
  ) {
    const state = getState();
    patchState({
      orderGroups: [...state.orderGroups, payload]
    });
  }

  @Action(DelOrderGroup)
  DelOrderGroup(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: DelOrderGroup
  ) {
    const state = getState();
    patchState({
      orderGroups: [...state.orderGroups.slice(0, Number(payload)),
                ...state.orderGroups.slice(Number(payload) + 1)]
    });
  }

}
