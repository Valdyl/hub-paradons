<script setup>
import { ref,onMounted } from 'vue'
import Item from '@/components/Item.vue'

import data from '@/data.json'

defineProps({
  msg: String,
})

const widthScreen = ref(window.innerWidth)

onMounted(()=>{
  const collectionItem = document.querySelectorAll('.item')

  collectionItem.forEach((item,id)=>{
    const valueAngle = Math.round(360 / (collectionItem.length) * (id+1))
    item.style.transform = `rotateY(${valueAngle}deg) rotateX(10deg) translateZ(${Math.round(widthScreen.value/3.25)}px)`
  })

  window.addEventListener('resize',()=>{
    widthScreen.value = window.innerWidth
    collectionItem.forEach((item,id)=>{
      const valueAngle = Math.round(360 / (collectionItem.length) * (id+1))
      item.style.transform = `rotateY(${valueAngle}deg) rotateX(10deg) translateZ(${Math.round(widthScreen.value/3.25)}px)`
    })
  })
  
})

</script>

<template>
    <div class="extra">
      <!-- <img  src="@/assets/img/logo.gif"/> -->
      <a href="https://paradons.fr" class="noyau logo" target="_blank">
        <img  class="logo noyau" src="https://valdyl.github.io/paradons-hub/assets/logo.png"/>
      </a>
      <iframe 
        class="iframe-twitch" 
        muted=false 
        src="https://clips.twitch.tv/embed?clip=AbstruseJollyGalagoMVGame-5wSyiJ95ytMzDWLS&parent=localhost&parent=valdyl.github.io&muted=false" 
        frameborder="0"
      ></iframe>
      <div class="container"> 
        <Item 
          v-for="(streamer,index) in data" 
          :key="streamer.name"
          :id="index"
          :dataStreamer="streamer"
        />      
      </div>
    </div>
</template>

<style lang="scss">
.extra{
  width: 100%;
  height: 100%;
  display:grid;
  place-items:center;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1100px;
}

.container{
  width:10px;
  aspect-ratio: 1;
  position:relative;
  transform-style: preserve-3d;
  display:flex;
  align-items: flex-start;
  justify-content: center;
  transform:translateX(-30px) rotateX(-100deg);
  animation:rotationCaroussel 70s infinite linear;
  &:has(.item:hover){
    animation-play-state: paused;
  }
}

.logo{
  position:absolute;
  width:400px;
  top:10%;
  left:25%;
  transition: opacity 300ms ease;
  img{
    width: 100%;
  }
  &.noyau{
    top:10%;
    width: round(33vw);
    filter: drop-shadow(0px 0px .5rem #019de7);
    animation: animationLogo 5s alternate infinite;
  }
}

.iframe-twitch{
    position:absolute;
    width:35vw;
    aspect-ratio: 16/9;
    top:5%;
    // left:35%;
    z-index: 10;
    display: none;
    transition: opacity 300ms ease;
}
.iframe-twitch:hover{
  & + .container{
    animation-play-state: paused;
  }


}


@keyframes rotationCaroussel{
  from {
    transform:rotateX(-10deg) rotateY(0deg);
  }
  to {
    transform:rotateX(-10deg) rotateY(360deg) ;
  }
}

@keyframes animationLogo{
  from {
    transform:translateY(-10px) rotateY(5deg);
  }
  to {
    transform:translateY(10px) rotateY(-5deg);
  }
}

</style>
