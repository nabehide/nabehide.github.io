<i18n>
  {
    "ja": {
      "born": "千葉県生まれ。",
      "master": "千葉大学大学院工学研究科修士課程修了。",
      "study": "最適化手法の工学的応用の研究に従事。(C++)",
      "job1": "デスクトップアプリケーションの開発。(Python, Qt)",
      "job2": "iOS/Androidアプリケーションの開発。(React Native, Expo, Unity)"
    },
    "en": {
      "born": "Born in Chiba, Japan.",
      "master": "Got master's degree in electrical engineering from Chiba University.",
      "study": "Engaged in research on optimization methods for engineering applications with C++.",
      "job1": "Developed desktop applications with Python, Qt.",
      "job2": "Developed iOS/Android application with React Native (Expo) or Unity."
    }
  }
</i18n>

<template>
  <div :class="{'isColorInverted': isColorInverted, 'container_about': true}">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <h2>About</h2>
      <div>
        <nuxt-link to="/#about" class="locale_link">日本語</nuxt-link>
        <span>/</span>
        <nuxt-link to="/en#about" class="locale_link">English</nuxt-link>
      </div>
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
      <a href="https://github.com/nabehide" target="_blank" rel="noopener" class="icon">
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
        <img src="/shadertoy.jpg" width="24px" height="24px" style="border-radius: 10px;" />
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
  border-color: #111;
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
  margin: 0px 10px;
}
.icon {
  margin: 4px;
}
.icon * {
  padding: 5px;
  border-radius: 5px;
}
</style>
