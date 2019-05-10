<template>
  <div class="div">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionForm',
  computed: {
    title () {
      return this.$options.name.split(/(?=[A-Z])/).join(' ')
    }
  }
}
</script>

<style>

</style>
