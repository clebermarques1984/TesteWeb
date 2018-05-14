<template>
    <div class="row">
        <app-stock v-for="stock in stocks.stocks" :key="stock.id" :item="stock"></app-stock>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import AppStock from '@/components/stocks/Stock.vue';

const namespace: string = 'stocks';

@Component({
    components: {
        'app-stock': AppStock,
    },
})
export default class Stocks extends Vue {
    @State stocks: Stocks[];

    @Action('initStocks', { namespace })
    initStocks: any;

    created() {
        this.initStocks();
    }
}
</script>