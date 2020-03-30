<i18n>
  {
    "ja": {
      "title": "電源Wi-Fiマップ",
      "description1": "電源（コンセント）やWi-Fiの使用可否を地図上に表示するアプリケーション。",
      "description2": "お店の公式サイトの情報はPythonでWebスクレイピングしています。"
    },
    "en": {
      "title": "Charge and Wi-Fi Japan",
      "description1": "The app shows charge / Wi-Fi spots in Japan.",
      "description2": "The database is updated automatically by web scraping."
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
    icon() { return "/works/charge-wifi.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    tags() { return [
      "React Native",
      "Expo",
      "Python Selenium",
    ]},
    links() { return [
      {
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app//id1448125892",
      },
      {
        name: "Google Play Store",
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
