<i18n>
  {
    "ja": {
      "title": "MCVS tools",
      "description1": "スマートフォンFPSゲームのモダンコンバットVSのツールを提供するWebサイト。2体のキャラクターが撃ちあった時の勝敗をシミュレートします。",
      "description2": "フロントエンドはNuxt.jsで作成しています。",

      "site": "サイト"
    },
    "en": {
      "title": "MCVS tools",
      "description1": "The web app provides some tools for 'Modern Conbat Versus', FPS game on smartphone. The app simulates two character shoot each other.",
      "description2": "Nuxt.js is used for development.",

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
    icon() { return "/thumbnail.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Web" + this.$t.bind(this)("site"),
        awesome: ["fas", "globe"],
        url: "https://mcvs-8422c.firebaseapp.com",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
