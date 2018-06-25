<template>
    <div class="item">
        <div @click.native="toggle" class="image">
            <img src="../../../assets/js.png" alt="">
        </div>
        <div class="content">
            <div class="header">
                <router-link to="/skills/technical/js">JavaScript</router-link>
            </div>
            <div class="meta">
                <span class="cinema">Le Langage du Web</span>
            </div>
            <div class="description">
                <p>
                    JavaScript est un langage de script utilisé pour développer des applications Web. Découvrez dans quel contexte j'ai acquis des compétences dans ce domaine !
                </p> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {

  }
}
</script>
<style scoped>

</style>