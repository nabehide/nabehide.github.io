<template>
  <div id="guiWrapper">
    <div id="guiContainer"/>
  </div>
</template>

<script>
import { flagAudio } from '~/assets/js/parameter';

export default {
  mounted () {
    const dat = require("dat.gui");
    this.gui = new dat.GUI({
      closed: false,
      closeOnTop: true,
      autoPlace: false,
    });
    this.gui.close();
    const guiContainer = document.getElementById("guiContainer");
    guiContainer.appendChild(this.gui.domElement);

    if ( flagAudio ) {
      const folder = this.gui.addFolder("audio");
      folder.open();
      const generalState = this.$store.getters["general/state"];
      const state = JSON.parse(JSON.stringify(generalState));
      folder.add(state, "audioSources", state.audioSources).setValue(state.audioSource).listen()
      .onChange(audioSource => {
        this.$store.commit("general/set", {name: "audioSource", value: audioSource})
        document.getElementById("button").click();
      });
    }

    const folder = this.gui.addFolder("scene");
    folder.open();
    const generalState = this.$store.getters["general/state"];
    const state = JSON.parse(JSON.stringify(generalState));
    folder.add(state, "scenes", state.scenes).setValue(state.scene).listen()
    .onChange(scene => {
      this.$store.commit("general/set", {name: "scene", value: scene});
      document.getElementById("buttonChangeScene").click();
    });

    const uniformsState = this.$store.getters["uniforms/state"];
    const uniforms = JSON.parse(JSON.stringify(uniformsState));
    for (let effect in uniforms) {
      const folder = this.gui.addFolder(effect);
      folder.open();
      for (let name in uniforms[effect]) {
        const target = uniforms[effect][name];
        const { min, max, step } = target;
        folder.add(target, "value", target.min, target.max, target.step).name(name).onChange(value => {
          this.$store.commit("uniforms/set", {effect: effect, name: name, value: value});
        })
      }
    }
  },
}
</script>

<style>
#guiWrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
