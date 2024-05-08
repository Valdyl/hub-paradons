<script setup>
import { ref,onMounted,onBeforeMount } from 'vue'
import axios from "axios";

const urlIframelast = ref('')
const urlIframeMost = ref('')
const urlIframeUsed = ref('')

const props = defineProps({
    dataStreamer: Object,
})

const showFrame = ()=>{
  // document.querySelector('.logo-infos').style.display ='none'
  // document.querySelector('#iframe-twitch').style.display ='block'

  document.querySelector('.noyau').classList.toggle('shown')


  document.querySelector('#iframe-twitch').src=`https://valdyl.github.io/assets-codepen/assets/${props.dataStreamer.name}.mp4`
  document.querySelector('#iframe-twitch').load();
}

const showLogo = ()=>{
  document.querySelector('.noyau').classList.toggle('shown')

  // document.querySelector('#iframe-twitch').style.display ='none'
  // document.querySelector('.logo-infos').style.display ='block'

  document.querySelector('#iframe-twitch').src=``


}

</script>

<template>
  <div class="item top" @mouseenter="showFrame" @mouseleave="showLogo">
    <div class="item__inner">
      <a target="_blank" :href="props.dataStreamer.urlTwitch">
        <h2>{{ props.dataStreamer.name.charAt(0).toUpperCase() + props.dataStreamer.name.slice(1) }}</h2>
        <img :src="`https://valdyl.github.io/assets-codepen/assets/${props.dataStreamer.name}.png`" :alt="props.dataStreamer.name">
      </a>          
      <div class="social">
        <!-- <a v-if="props.dataStreamer.donationGoal" target='blank' :href="props.dataStreamer.donationGoal"><i class="fa-solid fa-list-ul"></i></a> -->
        <a class="link" v-if="props.dataStreamer.donationGoal" target='blank' :href="props.dataStreamer.donationGoal">Donation Goal</a>
        <a target='blank' :href="props.dataStreamer.instagram"><i class="fa-brands fa-instagram"></i></a>
        <a v-if="props.dataStreamer.twitter" target='blank' :href="props.dataStreamer.twitter"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.item{
  position:absolute;
  aspect-ratio: 9/7;
  width:10vw;
  transform-style: preserve-3d;
  transition:200ms ease scale;
  opacity:1;
  &__inner{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;
    transition: .2s ease transform;
    background: rgba(149, 153, 234, 0.08);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    border: 1px solid rgba(149, 153, 234, 0.3);
    opacity: .5;
    &:after{
        content:'';
        width: 100%;
        height: 100%;
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
         border-radius: 1rem;
        background: linear-gradient(transparent 0 2px,rgba(149, 153, 234, 0.1) 2px 4px);
        background-size: 100% 4px;
        animation: gradientAnimation 30s linear infinite;
        z-index: 100;
    }

  }
  .social{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 .75rem;
    gap:.5rem;
    i{
      font-size: .625rem;
    }
    .link{
      font-size: .4rem;
      line-height: .5;
      margin-right: auto;
    }
  }
  img{
    width: 50%;
  }
  &:hover{
    .item__inner{
        transform: scale(1.1);
        opacity: 1;
    }
  }
  h2{
    filter: drop-shadow(-2px 2px 0 rgba(0,0,0,0.5));
    font-size: 1vh;
  }

  @keyframes gradientAnimation {
    from{
        background-position: 0% 0%;
    }
    to{
        background-position: 0% -100%;
    }
  }
}

</style>
