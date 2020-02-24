<i18n>
  {
    "ja": {
      "title": "three.js native",
      "description1": "3Dオブジェクトを見ながら、発熱するスマホで暖をとるスマートフォンアプリ。",
      "description2": "React Native, three.jsで作成しています。"
    },
    "en": {
      "title": "three.js native",
      "description1": "The native app shows 3D objects using three.js.",
      "description2": "The app is created with react native and three.js."
    }
  }
</i18n>

<template>
  <WorksComponent
    :title=title
    :icon=icon
    :description1=description1
    :description2=description2
    :links=links
    :isColorInverted=isColorInverted
  />
</template>

<script>
import WorksComponent from './WorksComponent';
export default {
  props: {
    isColorInverted: Boolean,
  },
  computed: {
    title() { return this.$t.bind(this)("title") },
    icon() { return "/works/threejsNative.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app/three-js-native/id1447928256",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.three",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
