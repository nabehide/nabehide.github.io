<template>
  <section :class="{'isColorInverted': isColorInverted}">
    <div>
      <h3>
        <img :src=icon width="64" height="64" alt="icon" />
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
      </div>
    </div>

    <div class="buttons">
      <div v-for="link in links" class="containerButton">
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
  /*
  border: solid thin rgba(0,0,0,0.5);
  */
  width: 90%;
  margin: 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  /*
  border-color: rgba(255,255,255,0.7);
  */
}
.descriptions {
  padding: 0px 10px;
  margin: 0px 16px;
}
h3 {
  padding: 10px;
  margin: 20px 16px;
  display: flex;
  align-items: center;
}
h3 img {
  vertical-align: middle;
  border-radius: 10px;
  margin-right: 20px;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  margin: 16px;
}
.containerButton {
  display: flex;
  justify-content: center;
  width: 100%;
}
a {
  text-decoration: none;
}
.button_icon {
  font-size: 20px;
  flex-grow: 1;
  margin: 0px 10px;
}
.button_text {
  flex-grow: 100;
  text-align: center;
}
.button {
  margin: 8px;
  padding: 10px 15px;
  background-color: #111;
  border-radius: 20px;
  display: flex;
  width: 100%;
  max-width: 300px;
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
  transition: background-color .3s;
}
.button * {
  transition: color .3s;
}
.button:hover {
  background-color: rgba(0,0,0,0.2);
  * {
    color: #111;
  }
}
.isColorInverted .button:hover {
  background-color: rgba(255,255,255,0.2);
  * {
    color: #eee;
  }
}
/*
table {
  margin: 10px 0px;
  border-collapse: separate;
  border-spacing: 5px;
}
*/
.tag {
  margin: 4px 6px;
  padding: 6px 12px;

  /* square border
  border: 1px solid;
  span {
    font-size: 14px;
  }
  */
  /*
  border-radius: 20px;
  */
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
