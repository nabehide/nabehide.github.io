<i18n>
  {
    "ja": {
      "title": "ずっしーの音感トレーニング",
      "description1": "ゲームをしながら相対音感が身につくスマートフォンアプリ。",
      "description2": "ずっしーさんが企画・音楽を担当、私は開発を担当しました。",
      "zussie": "ずっしーの音楽教室"
    },
    "en": {
      "title": "Zussie's music game for a good ear",
      "description1": "A game app for training a good ear for pitch.",
      "description2": "Over 20,000 downloads in a first week!",
      "zussie": "Music lesson by Zussie"
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
    icon() { return "/works/zussie.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    tags() { return [
      "Unity",
      "Unity IAP",
      "Cloud Firestore",
    ]},
    links() { return [
      {
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/jp/app/id1453413519",
      },
      {
        name: "Google Play Store",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=io.github.nabehide.zussie",
      },
      {
        name: this.$t.bind(this)("zussie"),
        awesome: ["fas", "external-link-alt"],
        url: "https://zussie-piano.com/app-introduction/",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
