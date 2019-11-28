<i18n>
  {
    "ja": {
      "title": "ポートフォリオ（このサイト）",
      "description1": "フロントエンドはNuxt.js, three.js(WebGL, glsl)で作成しています。",
      "description2": "Web Audio APIを用いたAudio effectが追加されたバージョンもあります。",

      "site": "サイト"
    },
    "en": {
      "title": "Portfolio(this site)",
      "description1": "The website is created with Nuxt.js and Three.js(WebGL, GLSL).",
      "description2": "Another version with audio effect using Web Audio API (music, microphone) is available.",

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
    icon() { return "/thumbnail.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Web" + this.$t.bind(this)("site"),
        awesome: ["fas", "globe"],
        url: "/",
      },
      {
        name: "Web" + this.$t.bind(this)("site") + " with audio effect (PC recommended)",
        awesome: ["fas", "globe"],
        url: "/portfolio_with_audio_effect",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
