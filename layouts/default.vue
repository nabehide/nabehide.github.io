<template>
  <div>
    <!--
    <Navigation/>
    <div style="margin-top: 10px;">
      <Locale/>
    </div>
    -->

    <canvas id="canvas" />
    <button id="button" style="display: none;">button</button>
    <button id="buttonChangeScene" style="display: none;" @click=handleChangeScene></button>

    <transition name="page">
      <nuxt/>
    </transition>

  </div>
</template>

<script>
// import Navigation from '~/components/Navigation';
// import Locale from '~/components/Locale';
import Three from '~/assets/js/Three'
export default {
  components: {
    // Navigation,
    // Locale,
  },
  mounted () {
    this.three = new Three(this.$store)
    this.three.mounted()
  },
  methods: {
    handleChangeScene () {
      this.three.initShader();
    }
  },
}
</script>

<style>
#canvas {
  position: fixed;
  z-index: -100;
  width: 100%;
  height: 100%;
}
</style>
