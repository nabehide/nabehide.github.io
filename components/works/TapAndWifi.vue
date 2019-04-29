<i18n>
  {
    "ja": {
      "title": "電源Wifiサーチ",
      "description1": "電源（コンセント）やWifiの使用可否を地図上に表示するアプリケーション。",
      "description2": "スマートフォンアプリはReact Nativeで作成しています。お店の公式サイトの情報はPythonでWebスクレイピングしています。"
    },
    "en": {
      "title": "Tap and Wifi",
      "description1": "The app shows store information on map in Japan, includes tap and wifi info. The correct information is referred to each official website.",
      "description2": "React Native is used for development."
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
  />
</template>

<script>
import WorksComponent from './WorksComponent';
export default {
  computed: {
    title() { return this.$t.bind(this)("title") },
    icon() { return "/works/tapandwifi.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app//id1448125892",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.tapandwifi",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
