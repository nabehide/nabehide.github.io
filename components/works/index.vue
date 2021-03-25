<template>
  <div id="worksContainer">

    <Zussie :isColorInverted="isColorInverted" />
    <Speedic :isColorInverted="isColorInverted" />
    <ChordMemos :isColorInverted="isColorInverted" />
    <TapAndWifi :isColorInverted="isColorInverted"/>
    <ThreejsNative :isColorInverted="isColorInverted"/>
    <Portfolio :isColorInverted="isColorInverted"/>
    <Others :isColorInverted="isColorInverted"/>

  </div>
</template>

<script>
import Locale from '~/components/Locale'

import ChordMemos from '~/components/works/ChordMemos'
import Others from '~/components/works/Others'
import Portfolio from '~/components/works/Portfolio'
import Speedic from '~/components/works/Speedic'
import TapAndWifi from '~/components/works/TapAndWifi'
import ThreejsNative from '~/components/works/ThreejsNative'
import Zussie from '~/components/works/Zussie'
export default {
  props: {
    isColorInverted: Boolean,
  },
  components: {
    Locale,

    ChordMemos,
    Others,
    Portfolio,
    // Speedic,
    TapAndWifi,
    ThreejsNative,
    Zussie,
  },
}
</script>

<style scoped lang="scss">
#worksContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  /*
  background-color: rgba(32, 32, 32, 0.1);
  */
}

.separator {
  border: solid thin #111;
  margin: 20px 0px 30px 0px;
}
.isColorInverted {
  /*
  background-color: rgba(240, 240, 240, 1.0);

  .separator {
    border: solid thin #eee;
  }
  */
}
</style>
