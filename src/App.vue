<template>
  <div id="app">
    <app-header
      :dark="dark"
      @toggle="dark = !dark"
    ></app-header>
    <main>
      <section class="list-examples">
        <header>
          <h1 class="mb-0 ml-0"><span>Vue</span> Examples</h1>
          <p class="mt-0">Simple examples with <strong><a href="https://vuejs.org" target="_blank" >Vue.js</a></strong>.</p>
        </header>
        <app-switch-component
          :options="examples" :selected="currentExample"
          @switch="e => currentExample = e"
        />
      </section>
      <section class="example">
        <component :is="currentExample" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSwitchComponent from '@/components/common/AppSwitchComponent.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SubscriptionForm: () => import('@/components/SubscriptionForm/index.vue'),
    TestComponent: () => import('@/components/TestComponent.vue'),
    AppSwitchComponent
  },
  data () {
    return {
      currentExample: 'SubscriptionForm',
      examples: [
        'SubscriptionForm',
        'TestComponent'
      ],
      dark: false
    }
  }
})
</script>

<style>
main {
  margin: 0 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

h1 span {
  color: #41B883;
}

p a {
  color: inherit;
}

@media screen and (min-width: 990px) {
  main {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
