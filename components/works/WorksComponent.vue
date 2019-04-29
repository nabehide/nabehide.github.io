<template>
  <section>
    <h3>
      <img :src=icon width="32" height="32" alt="icon" />
      <span>{{ title }}</span>
    </h3>
    <div class="descriptions">
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
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
  },
}
</script>

<style scoped>
.descriptions {
  padding: 0px 0px 0px 10px;
}
h3 img {
  vertical-align: middle;
}
table {
  margin: 10px 0px;
  border-collapse: separate;
  border-spacing: 5px;
}
</style>
