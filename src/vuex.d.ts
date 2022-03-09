// vuex.d.ts
import { Store } from 'vuex'
import { rootStateType } from '@/store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<rootStateType>
  }
}
