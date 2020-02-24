<template>
  <section :class="{'isColorInverted': isColorInverted}">
    <h3>
      <img :src=icon width="32" height="32" alt="icon" />
      <span>{{ title }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>

      <div style="display: flex;">
        <div v-for="tag in tags">
          <span>{{ tag }}</span>
        </div>
      </div>

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

<style scoped>
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
table {
  margin: 10px 0px;
  border-collapse: separate;
  border-spacing: 5px;
}
</style>
