<i18n>
  {
    "ja": {
      "title": "コードメモ",
      "description1": "音楽のコード進行を簡単にメモできるアプリ。",
      "description2": "React Nativeで作成しています。",
      "country": "jp/app",
      "site": "サイト"
    },
    "en": {
      "title": "Chord Memos",
      "description1": "A memo app for chord progression.",
      "description2": "The app is created with react native.",
      "country": "us/app",
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
    icon() { return "/works/ChordMemos.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/" + this.$t.bind(this)("country") + "/id1479015907",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.codelyricsmemo",
      },
      {
        name: "Web" + this.$t.bind(this)("site"),
        awesome: ["fas", "globe"],
        url: "https://chord-memos.nabehide.com",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
