<i18n>
  {
    "ja": {
      "title": "Close Button",
      "description1": "広告（偽物）の小さな閉じるボタンを押す速さを競うスマートフォンゲーム。",
      "description2": "React Nativeで作成しています。"
    },
    "en": {
      "title": "Close Button",
      "description1": "A smartphone game that competes for the speed of erasing ads.",
      "description2": "The app is created with react native."
    }
  }
</i18n>

<template>
  <section>
    <h3>
      <img src="/works/closeButton.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>
        <a href="https://itunes.apple.com/us/app/close-button/id1457552800" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.aderaser" target="_blank">
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
