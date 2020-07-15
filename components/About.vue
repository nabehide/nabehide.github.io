<i18n>
  {
    "ja": {
      "born": "千葉県生まれ。",
      "master": "千葉大学大学院工学研究科修士課程修了。",
      "study": "最適化手法の工学的応用の研究に従事。(C++)",
      "job1": "データ解析や可視化のためのデスクトップアプリケーションの開発。(Python, Qt)",
      "job2": "iOS/Androidアプリケーションの開発。(React Native, Expo, Unity)"
    },
    "en": {
      "born": "Born in Chiba, Japan.",
      "master": "Got master's degree in electrical engineering from Chiba University.",
      "study": "Engaged in research on optimization methods for engineering applications with C++.",
      "job1": "Developed desktop applications for data analytics and visualization with Python and Qt.",
      "job2": "Developed iOS/Android application with React Native (Expo) or Unity."
    }
  }
</i18n>

<template>
  <div :class="{'isColorInverted': isColorInverted, 'container_about': true}">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <!--
      <div>
        <nuxt-link to="/#about" class="locale_link">日本語</nuxt-link>
        <span>/</span>
        <nuxt-link to="/en#about" class="locale_link">English</nuxt-link>
      </div>
      -->
    </div>

    <h4>Hidetoshi Watanabe</h4>

    <div class="description_wrapper">
      <div class="year">
        <span>1990</span><span style="color: transparent;">-</span>
      </div>
      <span>{{ this.$t.bind(this)("born") }}</span>
    </div>

    <div class="description_wrapper">
      <div class="year">
        <span>2015</span><span style="color: transparent;">-</span>
      </div>
      <div>
        <div class="description first">{{ this.$t.bind(this)("master") }}</div>
        <div class="description end">{{ this.$t.bind(this)("study") }}</div>
      </div>
    </div>

    <div class="description_wrapper">
      <div class="year">
        <span>2015</span><span>-</span>
      </div>
      <div>
        <span>{{ this.$t.bind(this)("job1") }}</span>
      </div>
    </div>

    <div class="description_wrapper">
      <div class="year">
        <span>2018</span><span>-</span>
      </div>
      <span>{{ this.$t.bind(this)("job2") }}</span>
    </div>

    <h4 style="margin-bottom: 5px;">Skills</h4>
    <div class="tags_wrapper">
      <div v-for="tag in tags" class="tag">
        <span>{{ tag }}</span>
      </div>
    </div>

    <h4 style="margin-bottom: 5px;">Links</h4>
    <div class="links_wrapper">
      <a href="https://github.com/nabehide" target="_blank" rel="noopener" class="icon" style="margin: 10px;">
        <font-awesome-icon :icon="['fab', 'github']" style="background-color: #333; color: #eee;" />
      </a>
      <a href="https://twitter.com/____nabehide" target="_blank" rel="noopener" class="icon">
        <font-awesome-icon :icon="['fab', 'twitter']" style="background-color: #1da1f2; color: #eee;" />
      </a>
      <a href="https://qiita.com/nabehide" target="_blank" rel="noopener" class="icon">
        <img src="/qiita-favicon.png" width="24px" height="24px" style="border-radius: 10px;" />
      </a>
      <a href="https://soundcloud.com/nabehide" target="_blank" rel="noopener" class="icon">
        <font-awesome-icon :icon="['fab', 'soundcloud']" style="background: linear-gradient(#ff8800, #ff3300); color: #eee; width: 16px;" />
      </a>
      <a href="https://www.shadertoy.com/user/nabehide" target="_blank" rel="noopener" class="icon" >
        <img src="/shadertoy.jpg" width="26px" height="26px" style="border-radius: 10px;" />
      </a>
      <a href="https://atcoder.jp/users/nabehide" target="_blank" rel="noopener" class="icon">
        <img src="/Atcoder_logo.png" width="20px" height="20px" style="padding: 3px; background-color: white;" />
      </a>
    </div>

    <div class="badges">
      <a href="https://itunes.apple.com/us/developer/hidetoshi-watanabe/id1442101437#see-all/i-phonei-pad-apps" class="store_badge_apple">
        <img
          alt="Apple Store からダウンロード"
          src="/app_store.svg"
        />
      </a>
      <a href='https://play.google.com/store/apps/developer?id=nabehide' class="store_badge_google">
        <img
          width=150
          alt='Google Play で手に入れよう'
          src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
        />
      </a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    isColorInverted: Boolean,
  },
  computed: {
    tags() { return [
      "React Native",
      "Expo",
      "Nuxt.js",
      "Python",
      "C++",
      "Unity",
    ]},
  },
}
</script>

<style>
.container_about {
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;

  padding: 10px;
}
@media screen and (min-width: 770px) {
  .container_about {
    padding: 10px 20px;
  }
}
.container_about.isColorInverted {
  background-color: rgba(0,0,0,0.5);
}
.locale_link {
  padding: 3px 0px;
  text-decoration: none;
}
.locale_link.nuxt-link-exact-active {
  border-bottom: solid thin;
}
.description_wrapper {
  margin: 10px;
  display: flex;
}
.description {
  padding: 3px 0px;
}
.description.first {
  padding: 0px 0px 3px 0px;
}
.description.end {
  padding: 3px 0px 0px 0px;
}
.year {
  margin-right: 10px;
}
.tags_wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 10px;
}
.tag {
  margin: 5px 5px;
  padding: 5px 10px;

  border: 1px solid;
  span {
    font-size: 14px;
  }
}
.isColorInverted .tag {
  border-color: #eee;
}
.links_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
}
@media screen and (min-width: 600px) {
  .links_wrapper {
    justify-content: flex-start;
  }
}
.icon {
  margin: 4px;
}
.icon * {
  padding: 5px;
  border-radius: 5px;
}

.badges {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  flex-wrap: wrap;
}
@media screen and (min-width: 600px) {
  .badges {
    justify-content: flex-start;
  }
}
/*
.store_badge_google {
  position: relative;
  width: 150px;
  height: 60px;
}
.store_badge_apple {
  position: relative;
  width: 140px;
  height: 40px;
  margin-left: 5px;
}
*/
</style>
