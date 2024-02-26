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
      <a href="https://paradons.fr" class="noyau" target="_blank">
        <div class="logo-infos">
          <img  class="logo" src="https://valdyl.github.io/paradons-hub/assets/logo.png"/>
          <h1>56.137 €</h1>
        </div>
        <video id="iframe-twitch" autoplay="true" muted="false">
        </video>
      </a>
      <!-- <iframe 
        class="iframe-twitch" 
        muted=false 
        src="https://clips.twitch.tv/embed?clip=AbstruseJollyGalagoMVGame-5wSyiJ95ytMzDWLS&parent=localhost&parent=valdyl.github.io&muted=false" 
        frameborder="0"
      ></iframe> -->
        <!-- <source src="@/assets/vids/doigt.mp4" type="video/mp4" auto/> -->
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

.noyau{
    top:10%;
    width: round(35vw);
    display: grid;
    place-items: center;
    left:33%;
    position: absolute;
    animation: animationLogo 5s alternate infinite;
    aspect-ratio: 16/9;
    overflow: hidden;
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    // border-radius: 1rem;
    // border: 1px solid rgba(149, 153, 234, 0.3);
    opacity: .8;
}

.logo-infos{
  position:relative;
  width:86%;
  top: -2%;
  transition: opacity 300ms ease;
  filter: drop-shadow(0px 0px .5rem #019de7);
  img{
    margin-bottom: 2rem;
  }
  h1{
    font-size: 4rem;
  }
}

#iframe-twitch{
    position:absolute;
    width:100%;
    aspect-ratio: 16/9;
    top:0;
    left: 0;
    z-index: 10;
    display: none;
    transition: opacity 300ms ease;

}
.iframe-twitch:hover{
  & + .container{
    animation-play-state: paused;
  }


}


.shown{
  .logo-infos{
    display: none;
  }
  #iframe-twitch{
    display: block;
  }

  &:after{
        content:'';
        width: 100%;
        height: 100%;
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
         border-radius: 1rem;
        background: linear-gradient(rgba(1, 157, 231,0.2) 0 2px,rgba(149, 153, 234, 0.1) 2px 4px);
        background-size: 100% 4px;
        animation: gradientAnimation 30s linear infinite;
        z-index: 100;
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
