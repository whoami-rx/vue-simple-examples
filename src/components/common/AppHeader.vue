<template>
  <header>
    <div class="switch-btn">
      <span>Theme</span>
      <div
        class="btn"
        @click="toggle"
      ></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  created () {
    this.toggle()
  },
  methods: {

    toggle () {
      if (this.dark) {
        document.documentElement.setAttribute('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('theme')
      }
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  padding: 1em;
}
.switch-btn {
  display: flex;
  align-items: center;
}
span {
  margin-right: 1em;
}
.btn {
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  background: var(--font-color);
  transition: border 0.4s ease-in;
  border: 3px solid #41b883;
}
</style>
