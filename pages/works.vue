<template>
  <div id="worksContainer" :class="{'isColorInverted': isColorInverted}">
    <Locale />

    <CodeMemo />
    <div class="separator"/>
    <Tapioca />
    <div class="separator"/>
    <CloseButton />
    <div class="separator"/>
    <TapAndWifi />
    <div class="separator"/>
    <ThreejsNative />
    <div class="separator"/>
    <Cracker />
    <div class="separator"/>
    <WalkAndRide />
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

import CloseButton from '~/components/works/CloseButton'
import CodeMemo from '~/components/works/CodeMemo'
import Cracker from '~/components/works/Cracker'
import MCVStools from '~/components/works/MCVStools'
import Others from '~/components/works/Others'
import Portfolio from '~/components/works/Portfolio'
import TapAndWifi from '~/components/works/TapAndWifi'
import Tapioca from '~/components/works/Tapioca'
import ThreejsNative from '~/components/works/ThreejsNative'
import WalkAndRide from '~/components/works/WalkAndRide'
export default {
  components: {
    Locale,

    CodeMemo,
    CloseButton,
    Cracker,
    MCVStools,
    Others,
    Portfolio,
    TapAndWifi,
    Tapioca,
    ThreejsNative,
    WalkAndRide,
  },
  computed: {
    isColorInverted () { return this.$store.state.uniforms.color.isColorInverted.value }
  },
}
</script>

<style scoped lang="scss">
#worksContainer {
  margin: 50px 5px 0px 5px;
}

.separator {
  border: solid thin #111;
}
.isColorInverted {
  .separator {
    border: solid thin #eee;
  }
}
</style>
