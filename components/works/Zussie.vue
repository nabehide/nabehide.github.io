<i18n>
  {
    "ja": {
      "title": "ずっしーの音感トレーニング",
      "description1": "ゲームをしながら相対音感が身につくスマートフォンアプリ。",
      "description2": "Unityで作成しています。"
    },
    "en": {
      "title": "Zussie's music game for a good ear",
      "description1": "A game app for training a good ear for pitch.",
      "description2": "The app is created with Unity."
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
    icon() { return "/works/zussie.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://apps.apple.com/jp/app/id1453413519",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=io.github.nabehide.zussie",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
