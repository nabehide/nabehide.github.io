<i18n>
  {
    "ja": {
      "title": "ポートフォリオ",
      "description1": "Web Audio APIを用いたAudio effectが追加されたバージョンもあります。（PC推奨）",
      "description2": " ",
      "site": "サイト"
    },
    "en": {
      "title": "Portfolio (this site)",
      "description1": "Thre is another version with audio effect using Web Audio API. (PC recommended)",
      "description2": " ",
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
    icon() { return "/thumbnail.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    tags() { return [
      "Nuxt.js",
      "Three.js",
      "GLSL",
      "Web Audio API",
      "i18n",
    ]},
    links() { return [
      {
        name: "Web" + this.$t.bind(this)("site"),
        awesome: ["fas", "globe"],
        url: "/",
      },
      {
        name: "Web" + this.$t.bind(this)("site") + " with audio effect",
        awesome: ["fas", "globe"],
        url: "https://nabehide.github.io/portfolio_with_audio_effect",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
