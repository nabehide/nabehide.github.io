<i18n>
  {
    "ja": {
      "title": "Speedic",
      "description1": "Flutterで作成した音楽プレーヤーアプリ。",
      "description2": "Apple MusicなどiCloud上の音楽も再生速度を変更したり、ループ領域をカスタマイズできます。",
      "country": "jp/app",
      "LP": "ランディングページ"
    },
    "en": {
      "title": "Speedic",
      "description1": "A music player app for musicians.",
      "description2": "Control playback speed and loop region. Support for Apple Music and ",
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
    icon() { return "/works/speedic.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    tags() { return [
      "Flutter",
    ]},
    links() { return [
      {
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/" + this.$t.bind(this)("country") + "/id1539333173",
      },
      // {
      //   name: this.$t.bind(this)("LP"),
      //   awesome: ["fas", "external-link-alt"],
      //   url: "https://chord-memos.nabehide.com",
      // },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
