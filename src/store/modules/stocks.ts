// store/counter/index.ts
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { IRootState, IStockState, IStock } from '../types';
import { stocksData } from '@/data/api';

// initial state
export const state: IStockState = {
    stocks: [],
};

// computed properties for stores, will only re-evaluate when some of its dependencies have changed
export const getters: GetterTree<IStockState, IRootState> = {
};

// can perform asynchronous operations inside an action
export const actions: ActionTree<IStockState, IRootState> = {
    initStocks({ commit }): any {
        commit('setStocks', stocksData);
    },
};

// where we perform actual state modifications
export const mutations: MutationTree<IStockState> = {
    setStocks(stockState, payload) {
        stockState.stocks = payload;
    },
};

const namespaced: boolean = true;

export const stocks: Module<IStockState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
