<i18n>
  {
    "ja": {
      "title": "コード歌詞メモ帳",
      "description1": "音楽コードをタップだけで簡単にメモできるアプリ。",
      "description2": "React Nativeで作成しています。",
      "country": "jp"
    },
    "en": {
      "title": "Code and Lyrics Memos",
      "description1": "A memo app to keep your music codes.",
      "description2": "The app is created with react native.",
      "country": "us"
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
    icon() { return "/works/CodeMemo.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://apps.apple.com/" + this.$t.bind(this)("country") + "/app/id1479015907",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.codelyricsmemo",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
