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
  <section>
    <h3>
      <img src="/works/cracker.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>
        <a href="https://itunes.apple.com/us/app/endless-popper/id1445536136" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.cracker" target="_blank">
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
