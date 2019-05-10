<template>
  <div class="switcher">
    <div class="text"
      @click="collapsed = !collapsed"
    >
      {{ selected }}
    </div>
    <ul class="options" v-show="collapsed">
      <li
        v-for="opt in options"
        :key="opt"
        :class="[opt === selected ? 'active': '']"
        @click="switchSelected(opt)"
      >
        {{ opt }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['selected', 'options'],
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    switchSelected (opt) {
      this.collapsed = false
      this.$emit('switch', opt)
    }
  }
}
</script>

<style>

.switcher {
  max-width: 420px;
  position: relative;
}

.text {
  cursor: pointer;
  background: var(--bg-color);
  color: var(--font-color);
  border: none;
  padding: 1em;
  font-size: 1em;
  width: 100%;
  font-weight: bold;
  box-shadow: inset 1px 1px 0 var(--font-color),
              inset -1px -1px 0 var(--font-color)
}
ul {
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  list-style: none;
  background: var(--primary);
  color: #FFF;
  padding: 1em;
  font-size: 1em;
  position: absolute;
}

li {
  cursor: pointer;
}
li:not(:last-child) {
  margin-bottom: 1em;
}

li:hover {
  opacity: .8;
}
li.active {
  color: #41B883;
}
</style>
