<template>
    <div>
        <button @click="increment(1)">Increment</button>
        <button @click="decrement(1)">Decrement</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

const namespace: string = 'counter';

@Component
export default class Counter extends Vue {
  @Action('increment', { namespace })
  increment: any;

  @Action('decrement', { namespace })
  decrement: any;
}
</script>

