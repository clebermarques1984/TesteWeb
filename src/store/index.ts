
// store/index.ts
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from './types';
import { counter } from './modules/counter';
import { portfolio } from './modules/portfolio';
import { stocks } from './modules/stocks';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {
        version: '1.0.0', // a simple property
    },
    modules: {
        counter,
        portfolio,
        stocks,
    },
};

export default new Vuex.Store<IRootState>(store);
