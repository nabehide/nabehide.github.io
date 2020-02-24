<i18n>
  {
    "ja": {
      "title": "エンドレス・クラッカー",
      "description1": "無限に鳴らせるシンプルなクラッカーのスマートフォンアプリ。",
      "description2": "React Nativeで作成しています。"
    },
    "en": {
      "title": "Endless Popper",
      "description1": "The simple popper app on iOS and Android.",
      "description2": "The app is created with react native."
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
    icon() { return "/works/cracker.png" },
    description1() { return this.$t.bind(this)("description1") },
    description2() { return this.$t.bind(this)("description2") },
    links() { return [
      {
        name: "Apple Store (iOS)",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/app/endless-popper/id1445536136",
      },
      {
        name: "Google Play (Android)",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/details?id=com.cracker",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
