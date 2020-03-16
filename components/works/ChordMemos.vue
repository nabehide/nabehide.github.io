<i18n>
  {
    "ja": {
      "title": "コードメモ",
      "description1": "音楽のコード進行を簡単にメモできるスマートフォンアプリ。",
      "description2": " ",
      "country": "jp/app",
      "LP": "ランディングページ"
    },
    "en": {
      "title": "Chord Memos",
      "description1": "A memo app for chord progression.",
      "description2": " ",
      "country": "us/app",
      "LP": "Landing Page"
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
    icon() { return "/works/ChordMemos.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    tags() { return [
      "React Native",
      "i18n",
      "Nuxt.js",
      "Firebase hosting",
    ]},
    links() { return [
      {
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/" + this.$t.bind(this)("country") + "/id1479015907",
      },
      {
        name: "Google Play Store",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.codelyricsmemo",
      },
      {
        name: this.$t.bind(this)("LP"),
        awesome: ["fas", "external-link-alt"],
        url: "https://chord-memos.nabehide.com",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
