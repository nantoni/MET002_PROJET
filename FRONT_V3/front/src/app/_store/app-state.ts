import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StateModel } from './state-model';
import { SetCurrentUser, SetOrderBy, AddProducts} from './actions';
import { User } from '@app/_models';

@State<StateModel>({
  name: 'state',
  defaults: {
    currentUser: new User(),
    orderBy: 'Size',
    products: []
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
  static getProducts(state: StateModel) {
    return state.products;
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

  @Action(AddProducts)
  AddOrderGroup(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: AddProducts
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }

}
