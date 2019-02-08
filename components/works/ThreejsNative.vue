<i18n>
  {
    "ja": {
      "title": "three.js native",
      "description1": "3Dオブジェクトを見ながら、発熱するスマホで暖をとるスマートフォンアプリ。",
      "description2": "React Native, three.jsで作成しています。"
    },
    "en": {
      "title": "three.js native",
      "description1": "The native app shows 3D objects using three.js.",
      "description2": "The app is created with react native and three.js."
    }
  }
</i18n>

<template>
  <section>
    <h3>
      <img src="/works/threejsNative.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>
        <a href="https://itunes.apple.com/us/app/three-js-native/id1447928256" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.three" target="_blank">
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
