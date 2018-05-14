<template>
    <div class="col-lg-4 col-sm-6 mt-2">
        <div class="card">
            <div class="card-header">
                <div class="float-left">
                    <strong>{{ item.name }}</strong><small> Price {{ item.price }}</small>
                </div>
            </div>
            <div class="card-body">
                <form class="form-row">
                        <div class="col-8">
                            <input class="form-control"
                                type="number"
                                placeholder="Quantity"
                                v-model.number="quantity" 
                                >
                        </div>
                        <div class="col-4">
                           <button class="btn btn-dark float-right"
                                @click.prevent="buyClick"
                                :disabled="disabled"
                                >Buy
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { IStock } from '@/store/types';

const namespace: string = 'portfolio';

@Component
export default class Stock extends Vue {
    @Prop() item: IStock;

    @Action('buyStock', { namespace })
    buyStock: any;

    quantity: number = 0;

    get disabled(): boolean {
        const result = this.quantity <= 0 || !Number.isInteger(this.quantity);
        return result;
    }

    buyClick() {
        const order: IStock =  {
            id: this.item.id,
            name: this.item.name,
            price: this.item.price,
            quantity: this.quantity,
        };
        this.buyStock(order);
        this.quantity = 0;
    }
}
</script>

