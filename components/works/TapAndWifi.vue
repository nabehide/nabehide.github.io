<i18n>
  {
    "ja": {
      "title": "電源Wifiサーチ",
      "description1": "電源（コンセント）やWifiの使用可否を地図上に表示するアプリケーション。",
      "description2": "お店の公式サイトの情報をPythonでWebスクレイピングしています。",
      "description3": "スマートフォンアプリはReact Nativeで作成しています。"
    },
    "en": {
      "title": "Tap and Wifi",
      "description1": "The app shows store information on map in Japan, includes tap and wifi info.",
      "description2": "The correct information is referred to each official website.",
      "description3": "React Native is used for development."
    }
  }
</i18n>

<template>
  <section>
    <h3>
      <img src="/works/tapandwifi.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>{{ $t('description3') }}</p>
      <p>
        <a href="https://itunes.apple.com/us/app//id1448125892" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.tapandwifi" target="_blank">
          <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play (Android)
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.descriptions {
  padding: 0px 0px 0px 10px;
}
h3 img {
  vertical-align: middle;
}
</style>
