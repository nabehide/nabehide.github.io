<i18n>
  {
    "ja": {
      "title": "その他スマートフォンアプリ"
    },
    "en": {
      "title": "Other smartphone apps"
    }
  }
</i18n>

<template>
  <section>
    <h3>
      <img src="/thumbnail.png" width="32" height="32" alt="icon" />
      <span>{{ $t('title') }}</span>
    </h3>
    <div class="descriptions">
      <p>
        <a href="https://itunes.apple.com/us/developer/hidetoshi-watanabe/id1442101437#see-all/i-phonei-pad-apps" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/collection/cluster?clp=igMxChkKEzUzMTcyOTYxMjAyNDE0OTg5MzkQCBgDEhIKDGNvbS5hZGVyYXNlchABGAMYAQ%3D%3D:S:ANO1ljIo3w8&gsr=CjSKAzEKGQoTNTMxNzI5NjEyMDI0MTQ5ODkzORAIGAMSEgoMY29tLmFkZXJhc2VyEAEYAxgB:S:ANO1ljK2fLU" target="_blank">
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
