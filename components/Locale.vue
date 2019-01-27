<template>
  <div>
    <span><nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link></span>
    <span>/</span>
    <span><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></span>
  </div>
</template>

<style scoped lang="scss">
div {
  span {
    display: inline-block;
    a {
      text-decoration: none;

      &.nuxt-link-exact-active {
        border-bottom: solid thin #111;
      }
    }
  }
}
.isColorInverted {
  a {
    &.nuxt-link-exact-active {
      border-bottom-color: #eee;
    }
  }
}
</style>
