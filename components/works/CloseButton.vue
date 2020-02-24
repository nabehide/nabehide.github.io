<i18n>
  {
    "ja": {
      "title": "Close Button",
      "description1": "広告（偽物）の小さな閉じるボタンを押す速さを競うスマートフォンゲーム。",
      "description2": "React Nativeで作成しています。"
    },
    "en": {
      "title": "Close Button",
      "description1": "A smartphone game that competes for the speed of erasing ads.",
      "description2": "The app is created with react native."
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
    icon() { return "/works/closeButton.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app/close-button/id1457552800",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.aderaser",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
