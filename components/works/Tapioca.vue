<i18n>
  {
    "ja": {
      "title": "タピオカマップ",
      "description1": "近くのタピオカドリンクのお店が見つかるスマートフォンアプリ。",
      "description2": "React Nativeで作成しています。"
    },
    "en": {
      "title": "Tapioca map",
      "description1": "A map app to finds tapioca drink in japan.",
      "description2": "The app is created with react native."
    }
  }
</i18n>

<template>
  <section>
    <h3>
      <img src="/works/tapioca.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>
        <a href="https://itunes.apple.com/us/app/%E3%82%BF%E3%83%94%E3%82%AA%E3%82%AB%E3%83%9E%E3%83%83%E3%83%97/id1459651029" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.tapioca" target="_blank">
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
