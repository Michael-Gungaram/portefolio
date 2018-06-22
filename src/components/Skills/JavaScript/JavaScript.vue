<template>
    <div class="item">
        <div @click.native="toggle" class="image">
            <img src="https://cdn-images-1.medium.com/max/300/1*yYcXoIyTb8JlZUsmRXNm3g.png" alt="">
        </div>
        <div class="content">
            <a class="header">JavaScript</a>
            <div class="meta">
                <span class="cinema">Le Langage du Web</span>
            </div>
            <div class="description">
                La La La La La
            </div>
        </div>
        <sui-modal v-model="open">
            <sui-modal-header>JavaScript Skills</sui-modal-header>
            <p>This is a sample content.</p>
            <p>This is another sample content!</p>
        </sui-modal>
    </div>
</template>
<script>
export default {
  data() {
    return {
      open: false 
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
}
</script>
<style scoped>

</style>