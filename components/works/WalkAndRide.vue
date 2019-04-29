<i18n>
  {
    "ja": {
      "title": "1駅歩く乗換案内",
      "description1": "「1駅先から乗るルート」と「1駅手前で降りるルート」も同時に検索するアプリケーション。",
      "description2": "フロントエンドはNuxt.js、サーバーサイドはFlaskをHerokuで動かしています。",
      "description3": "スマートフォンアプリはReact Nativeで作成しています。",

      "site": "サイト"
    },
    "en": {
      "title": "Walking and Transit Navigation",
      "description1": "The App suggests routes when walking between stations in Japan.",
      "description2": "Nuxt.js and Flask are used for web.",
      "description3": "React Native is used for native app.",

      "site": "site"
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
    icon() { return "/works/walkandride.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Web" + this.$t.bind(this)("site"),
        awesome: ["fas", "globe"],
        url: "http://walkandride.html.xdomain.jp",
      },
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app/%E6%9C%80%E5%AE%89%E4%B9%97%E6%8F%9B%E6%A1%88%E5%86%85-%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0/id1442101438",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.walk_and_ride",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
