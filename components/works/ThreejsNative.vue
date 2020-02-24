<i18n>
  {
    "ja": {
      "title": "three.js native",
      "description1": "3Dオブジェクトを見ながら、発熱するスマホで暖をとるスマートフォンアプリ。",
      "description2": " "
    },
    "en": {
      "title": "three.js native",
      "description1": "The native app shows 3D objects using three.js.",
      "description2": " "
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
    :tags=tags
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
    tags() { return [
      "React Native",
      "Three.js",
    ]},
    links() { return [
      {
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app/three-js-native/id1447928256",
      },
      {
        name: "Google Play Store",
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
