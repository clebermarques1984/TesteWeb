// store/counter/index.ts
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { IRootState, ICounterState } from '../types';

// initial state
export const state: ICounterState = {
    count: 7,
};

// computed properties for stores, will only re-evaluate when some of its dependencies have changed
export const getters: GetterTree<ICounterState, IRootState> = {
    getCount(countState: ICounterState): number {
        return countState.count;
    },
};

// can perform asynchronous operations inside an action
export const actions: ActionTree<ICounterState, IRootState> = {
    increment({ commit }, payload): any {
        commit('increment', payload);
    },
    decrement({ commit }, payload): any {
        commit('decrement', payload);
    },
};

// where we perform actual state modifications
export const mutations: MutationTree<ICounterState> = {
    increment(countState, payload: number) {
        countState.count += payload;
    },
    decrement(countState, payload: number) {
        countState.count -= payload;
    },
};

const namespaced: boolean = true;

export const counter: Module<ICounterState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
