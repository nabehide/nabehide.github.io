<template>
  <div>
    <Gui/>
    <div :class="{'container': true, 'isColorInverted': isColorInverted}">
      <div class="intro">
        <div class="inner" >
          <p>nabehide</p>
          <p>Software Developer</p>
          <p>Tokyo, Japan</p>

          <table>
            <tbody>
            <tr>
              <td class="icon"> <a href="https://github.com/nabehide" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'github']" style="background-color: #333; color: #eee;" />
              </a> </td>
              <td> <a href="https://github.com/nabehide" target="_blank" rel="noopener">Github</a> </td>
            </tr>

            <tr>
              <td class="icon"> <a href="https://twitter.com/____nabehide" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'twitter']" style="background-color: #1da1f2; color: #eee;" />
              </a> </td>
              <td> <a href="https://twitter.com/____nabehide" target="_blank" rel="noopener">Twitter</a> </td>
            </tr>

            <!--
            <tr>
              <td class="icon"> <a href="https://soundcloud.com/nabehide" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'soundcloud']" />
              </a> </td>
              <td> <a href="https://soundcloud.com/nabehide" target="_blank" rel="noopener">Soundcloud</a> </td>
            </tr>

            <tr>
              <td> <a href="https://suzuri.jp/____nabehide" target="_blank" rel="noopener" class="icon"><img src="/surisurikun.png" width="36px" height="36px" ></a> </td>
              <td> <a href="https://suzuri.jp/____nabehide" target="_blank" rel="noopener">Suzuri</a> </td>
            </tr>
            -->

            <tr>
              <td class="icon"> <a href="https://qiita.com/nabehide" target="_blank" rel="noopener">
                <img src="/qiita-favicon.png" width="19px" height="19px" />
              </a> </td>
              <td> <a href="https://qiita.com/nabehide" target="_blank" rel="noopener">Qiita</a> </td>
            </tr>

            <!--
            <tr>
              <td> <a class="icon"></a> </td>
              <td> <a href="https://www.shadertoy.com/user/nabehide" class="text" target="_blank" rel="noopener">Shadertoy</a> </td>
            </tr>

            <tr>
              <td> <a href="https://medium.com/@nabehide" target="_blank" rel="noopener" class="icon"><i class="fab fa-medium"></i></a> </td>
              <td> <a href="https://medium.com/@nabehide" target="_blank" rel="noopener">Medium</a> </td>
            </tr>

            <tr>
              <td> <a href="https://www.linkedin.com/nabehide" target="_blank" rel="noopener" class="icon"><i class="fab fa-linkedin"></i></a> </td>
              <td> <a href="https://www.linkedin.com/nabehide" target="_blank" rel="noopener">Linkedin</a> </td>
            </tr>

            -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gui from '~/components/Gui'
export default {
  components: {
    Gui,
  },
  computed: {
    isColorInverted () { return this.$store.state.uniforms.color.isColorInverted.value }
  },
}
</script>

<style scoped lang="scss">
#button {
  display: none;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .intro {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      margin: 8px 0px;
    }

    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      padding: 10px 20px;
      border-radius: 5px;

      /* border
      border-top: thin solid #eee;
      border-bottom: thin solid #eee;
      */

      table {
        padding: 5px;
        * {
          padding: 2px;
        }
        .icon {
          text-align: center;

          a * {
            border-radius: 3px;
          }
        }
      }
    }
  }
}
/* background color
.inner {
  background-color: rgba(255,255,255,0.5);
}
.isColorInverted .inner {
  background-color: rgba(0,0,0,0.5);
}
*/
</style>
