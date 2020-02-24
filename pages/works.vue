<template>
  <div id="worksContainer" :class="{'isColorInverted': isColorInverted}">
    <Locale />

    <Zussie />
    <div class="separator"/>
    <ChordMemos />
    <div class="separator"/>
    <Tapioca />
    <div class="separator"/>
    <TapAndWifi />
    <div class="separator"/>
    <ThreejsNative />
    <div class="separator"/>
    <MCVStools />
    <div class="separator"/>
    <Portfolio />
    <div class="separator"/>
    <Others />

  </div>
</template>

<script>
import Locale from '~/components/Locale'

import ChordMemos from '~/components/works/ChordMemos'
import MCVStools from '~/components/works/MCVStools'
import Others from '~/components/works/Others'
import Portfolio from '~/components/works/Portfolio'
import TapAndWifi from '~/components/works/TapAndWifi'
import Tapioca from '~/components/works/Tapioca'
import ThreejsNative from '~/components/works/ThreejsNative'
import Zussie from '~/components/works/Zussie'
export default {
  components: {
    Locale,

    ChordMemos,
    MCVStools,
    Others,
    Portfolio,
    TapAndWifi,
    Tapioca,
    ThreejsNative,
    Zussie,
  },
  computed: {
    isColorInverted () { return this.$store.state.uniforms.color.isColorInverted.value }
  },
}
</script>

<style scoped lang="scss">
#worksContainer {
  margin: 35px 20px 0px 20px;
  padding-top: 15px;
  // background-color: rgba(32, 32, 32, 0.1);
}

.separator {
  border: solid thin #111;
  margin: 20px 0px 30px 0px;
}
.isColorInverted {
  // background-color: rgba(240, 240, 240, 1.0);

  .separator {
    border: solid thin #eee;
  }
}
</style>
