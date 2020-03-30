<i18n>
  {
    "ja": {
      "title": "タピオカマップ",
      "description1": "近くのタピオカドリンクのお店が見つかるスマートフォンアプリ。",
      "description2": "お店のデータベースはWebスクレイピングで自動化しています。"
    },
    "en": {
      "title": "Boba tea maps",
      "description1": "A map app to find boba tea shops in Japan.",
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
    icon() { return "/works/tapioca.png" },
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
        url: "https://itunes.apple.com/us/app/%E3%82%BF%E3%83%94%E3%82%AA%E3%82%AB%E3%83%9E%E3%83%83%E3%83%97/id1459651029",
      },
      {
        name: "Google Play Store",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.tapiokamap",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
