<template>
  <div>
      <p>Count from State: {{ counter.count }}</p>
      <p>Count from Getter: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';
import { ICounterState } from '@/store/types';

const namespace: string = 'counter';

@Component
export default class Home extends Vue {
  @State counter: ICounterState;

  @Getter('getCount', { namespace })
  count: number;
}
</script>
