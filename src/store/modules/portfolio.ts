// store/counter/index.ts
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { IRootState, IPortfolioState, IStock } from '../types';
import * as _ from 'lodash';

// initial state
export const state: IPortfolioState = {
    funds: 100000,
    stocks: new Array<IStock>(),
};

// computed properties for stores, will only re-evaluate when some of its dependencies have changed
export const getters: GetterTree<IPortfolioState, IRootState> = {
    getFunds(portfolioState: IPortfolioState): number {
        return portfolioState.funds;
    },
};

// can perform asynchronous operations inside an action
export const actions: ActionTree<IPortfolioState, IRootState> = {
    buyStock({ commit }, payload: IStock): any {
        commit('buyStock', payload);
    },
};

// where we perform actual state modifications
export const mutations: MutationTree<IPortfolioState> = {
    buyStock(portfolioState, payload: IStock) {
        const records = portfolioState.stocks.find((el: any) => el.id === payload.id);
        console.log(records);
        if (records) {
            console.log('record exists');
            records.quantity += payload.quantity;
        } else {
            console.log('new record');
            portfolioState.stocks.push(payload);
        }
    },
};

const namespaced: boolean = true;

export const portfolio: Module<IPortfolioState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
