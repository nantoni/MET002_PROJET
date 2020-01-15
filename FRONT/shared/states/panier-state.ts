import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { PanierStateModel } from "./panier-state-model";
import { AddProduit } from "../actions/addProduit-action";
import { DelProduit } from "../actions/delProduit-action";
import { SetCurrentProduit } from "../actions/setCurrentProduit-action";
import { Produit } from "../models/produit";

@State<PanierStateModel>({
  name: "panier",
  defaults: {
    panier: [],
    current: new Produit()
  }
})
export class PanierState {
  @Selector()
  static getPanier(state: PanierStateModel) {
    return state.panier;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      panier: [...state.panier, payload]
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<PanierStateModel>,
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
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: SetCurrentProduit
  ) {
    patchState({ current: payload });
  }
}
