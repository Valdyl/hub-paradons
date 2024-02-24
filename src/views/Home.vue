<script setup>
import { ref,onMounted } from 'vue'
import Container from '@/components/Container.vue'
import '@/assets/js/PureSnow.js'

defineProps({
  msg: String,
})
</script>

<template>
  <section>
    <div id="snow"></div>
    <Container />
  </section>
</template>

<style lang="scss">
section{
  width:100%;
  position: relative;
  height:100%;
}

#snow{
  width:100%;
  position: absolute;
  top:0;
  height:100%;
  overflow: hidden;
  transform: scaleY(-1);
}

.snowflake {
  top:0;
  position: absolute;
  width: 5px;
  height: 5px;
  background: linear-gradient(#019de7, #019de7);
  border-radius: 50%;
  filter: drop-shadow(0 0 10px #019de7);
}
</style>
