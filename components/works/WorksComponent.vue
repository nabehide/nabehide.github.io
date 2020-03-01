<template>
  <section :class="{'isColorInverted': isColorInverted}">
    <h3>
      <img :src=icon width="32" height="32" alt="icon" />
      <span>{{ title }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>

      <div style="display: flex; flex-wrap: wrap;">
        <div v-for="tag in tags" class="tag">
          <span>{{ tag }}</span>
        </div>
      </div>

      <div class="buttons">
        <div v-for="link in links">
          <a :href=link.url target="_blank" rel="noopener" class="button" >
            <font-awesome-icon :icon="[link.awesome[0], link.awesome[1]]" class="button_icon" />
            <span class="button_text">{{ link.name }}</span>
          </a>
        </div>
      </div>
      <!--
      <table>
        <tbody>
          <tr v-for="link in links" >
            <td>
              <a :href=link.url target="_blank" >
                <font-awesome-icon :icon="[link.awesome[0], link.awesome[1]]" />
              </a>
            </td>
            <td>
              <a :href=link.url target="_blank" >
                {{ link.name }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    description1: String,
    description2: String,
    links: Array,
    tags: Array,
    isColorInverted: Boolean,
  },
}
</script>

<style scoped lang="scss">
section {
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  width: 90%;
  margin: 20px 0px;
}
@media screen and (min-width: 770px) {
  section {
    width: 45%;
  }
}
@media screen and (min-width: 1180px) {
  section {
    width: 30%;
  }
}
.isColorInverted {
  background-color: rgba(0,0,0,0.5);
}
.descriptions {
  padding: 0px 10px;
}
h3 {
  padding: 10px;
  display: flex;
  align-items: center;
}
h3 img {
  vertical-align: middle;
  border-radius: 5px;
  margin-right: 10px;
}
.buttons {
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
}
a {
  text-decoration: none;
}
.button_icon {
  font-size: 20px;
  flex-grow: 1;
}
.button_text {
  flex-grow: 10;
  text-align: center;
}
.button {
  margin: 5px;
  padding: 10px 15px;
  background-color: #111;
  border-radius: 20px;
  display: flex;
  /*
  justify-content: space-around;
  */
  align-items: center;
  text-align: center;
  * {
    color: #eee,
  }
}
.isColorInverted .button {
  background-color: #eee;
  * {
    color: #111,
  }
}
.button,
.button::before,
.button::after {
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
}
.button:hover {
  background-color: rgba(0,0,0,0.6);
}
.isColorInverted .button:hover {
  background-color: rgba(255,255,255,0.6);
}
/*
table {
  margin: 10px 0px;
  border-collapse: separate;
  border-spacing: 5px;
}
*/
.tag {
  margin: 5px 5px;
  padding: 5px 10px;

  /* square border
  border: 1px solid;
  span {
    font-size: 14px;
  }
  */
  border-radius: 20px;
  border: 1px solid;
  border-color: #111;
  span {
    font-size: 14px;
  }
  /* rounded filled
  background-color: #111;
  span {
    color: #eee;
  }
  */
}
.isColorInverted .tag {
  border-color: #eee;
  /* rounded filled
  background-color: #eee;
  span {
    color: #111;
  }
  */
}
</style>
