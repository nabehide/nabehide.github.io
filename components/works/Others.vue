<i18n>
  {
    "ja": {
      "title": "スマートフォンアプリ一覧",
      "description1": " ",
      "description2": " "
    },
    "en": {
      "title": "Smartphone apps list",
      "description1": " ",
      "description2": " "
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
        name: "Apple Store",
        awesome: ["fab", "apple"],
        url: "https://itunes.apple.com/us/developer/hidetoshi-watanabe/id1442101437#see-all/i-phonei-pad-apps",
      },
      {
        name: "Google Play Store",
        awesome: ["fab", "google-play"],
        url: "https://play.google.com/store/apps/developer?id=nabehide",
      },
    ]},
  },
  components: {
    WorksComponent,
  },
}
</script>
