import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StateModel } from './state-model';
import { SetCurrentUser, SetOrderBy, AddProduit, DelProduit, SetCurrentProduit, DelCurrentUser} from './actions';
import { User, Product } from '@app/_models';

@State<StateModel>({
  name: 'state',
  defaults: {
    currentUser: new User(),
    orderBy: 'Size',
    panier: [],
    currentProduit: new Product()
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
  static getCurrentProduit(state: StateModel) {
    return state.currentProduit;
  }

  @Selector()
  static getPanier(state: StateModel) {
    return state.panier;
  }

  @Action(SetCurrentUser)
  SetCurrentUser(
    { patchState }: StateContext<StateModel>,
    { payload }: SetCurrentUser
  ) {
    patchState({ currentUser: payload });
  }

  @Action(DelCurrentUser)
  DelCurrentUser(
    { patchState }: StateContext<StateModel>,
  ) {
    patchState({ currentUser: null });
  }


  @Action(SetOrderBy)
  SetOrderBy(
    { patchState }: StateContext<StateModel>,
    { payload }: SetOrderBy
  ) {
    patchState({ orderBy: payload });
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      panier: [...state.panier, payload]
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();

    patchState({
      panier: [...state.panier.slice(0, Number(payload)),
                ...state.panier.slice(Number(payload) + 1)]
    });
  }

  @Action(SetCurrentProduit)
  Set(
    { getState, patchState }: StateContext<StateModel>,
    { payload }: SetCurrentProduit
  ) {
    patchState({ currentProduit: payload });
  }

}
