<template>
    <div id="skills" class="ui piled segment">
        <div class="ui divided items">
            <javascript></javascript>
            <typescript></typescript>
            <div class="item">
                <div class="image">
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
            </div>
            <div class="item">
                <div class="image">
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
            </div>
            <div class="item">
                <div class="image">
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
            </div>
        </div>
    </div>
</template>
<script>
import JavaScript from './JavaScript/JavaScript'
import TypeScript from './TypeScript/TypeScript'

export default {
  name: 'skills',
  components: {
    'javascript': JavaScript,
    'typescript': TypeScript
  }
}
</script>
<style scoped>

</style>
