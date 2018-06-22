<template>
  <div id="root">
    <menu-bar/>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MenuBar from '@/components/Common/MenuBar'

export default {
  name: 'App',
  components: {
    'menu-bar': MenuBar
  }
}
</script>

<style>
  #root {
    font-family: 'Times new Roman';
    font-size: 16px;
  }

  .title {
    font-family: 'Times New Roman', Times, serif;
  }

  .ui.segment {
    width: 60%;
    margin: auto !important;
  }
</style>
